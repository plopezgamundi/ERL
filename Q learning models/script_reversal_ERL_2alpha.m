clear variables

%set path for files
addpath(genpath('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/lowEffort'));
addpath(genpath('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/highEffort'));
%addpath(genpath('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/lowEffort'));
%addpath(genpath('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/highEffort'));

eff=["high" "low"];
Nparms=3; %alpha for success, alpha for unsuccess, and temperature

for c=1:size(eff,2)
    if eff(c)=="high"
        cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/highEffort';
        files=dir('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/highEffort/*.csv');
        %cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/highEffort';
        %files=dir('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/highEffort/*.csv');        
        output_file='HE_bestfit_2alpha.txt';
    else
        cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/lowEffort';
        files=dir('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/lowEffort/*.csv');
        %cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/lowEffort';
        %files=dir('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/lowEffort/*.csv');
        output_file='LE_bestfit_2alpha.txt';
    end;
    Nsubjects=size(files,1);
    for s = 1:Nsubjects
        SampleTrials=0;
        fname = files(s).name;
        d = readtable(fname);  

        a=d.Choice_a; %1 is simply cue 1 (regardless if its high reward or not) and 2 is cue 2
        r=d.RL_Outcome_r; %outcome regardless of performance
        r(r==-1)=0; %changing -1 to 0 since we didn't have loss, just no reward
        e=d.Fdbk_Eff;
        %e(e==0)=-1; %changing 0s to -1
        for zz=1:10
            clear E LL
            hh = @(x) RescolaWagner_2alpha(x,a,r,e);
            %[E, LL]=fmincon(hh,rand(1,3),[],[],[],[],[0.01 0.01 0.01],[100 1 1], [],...
            [E, LL]=fmincon(hh,rand(1,3),[],[],[],[],[0 0 0],[100 1 1], [],...
                optimset('maxfunevals',10000,'maxiter',4000,'GradObj','off','DerivativeCheck','off','LargeScale','on','Algorithm','active-set'));
            abeta(zz)=E(1);
            aalpha_s(zz)=E(2);
            aalpha_us(zz)=E(3);
            aloglike(zz)=LL;
        end;

        %%%% find model with minimum log likelihood (log likelihood is
        %%%% positive right now)
        [m idx]=min(aloglike);
        %%%% store parameters for the model with the minimum loglike
        beta=abeta(idx);
        alpha_s=aalpha_s(idx);
        alpha_us=aalpha_us(idx);
        loglike=aloglike(idx);

        %%%% loglikelihood for random -> choice at 0.5
        n_trials=length(r); %this is the number of included trials
        loglikeRND=-n_trials*log(0.5);

        %%% Compute pseudoR square
        Fit=1-(loglike/loglikeRND);
        %%%compute BIC
        thisBIC = (-2*loglike)+Nparms*(log(n_trials)); 

        %display alfa, beta, Fit
        %['alfa = ' num2str(alfa)]
        %['beta = ' num2str(beta)]
        %['Fit = ' num2str(Fit)]

        sub_results=cat(2,d.participant(1), alpha_s, alpha_us, beta, loglike, Fit, thisBIC, n_trials);
        allOutputMatrix(s,:) = sub_results;
    end;
    
    if eff(c)=="high"
        HE_OutputMatrix=allOutputMatrix;
    else
        LE_OutputMatrix=allOutputMatrix;
    end;
    
    cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/RL_output_v7esp';
    %cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/RL_output_v7';   
    colNames = {'ProlificID', 'alpha_succ', 'alpha_unsucc', 'beta', 'LL', 'R_sqr', 'BIC', 'NTrials'};
    bestfit_table= array2table(allOutputMatrix,'VariableNames',colNames);
    writetable(bestfit_table, output_file);
end;

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Just PLOTTING

%%%% once you have estimated alpha and beta for each participant you can
%%%% run the model with those values ("alpha" and "beta") and based on each participant'
%%%% actions and outcomes ("a" and "r"), and look at "p" (that will represent the
%%%% probability of doing action 1). 

Nsubjects2=size(allOutputMatrix,1);

%seeing if I can lay out high and low effort plots right next to each other
for s = 1:Nsubjects2
    clear d_bestfit_high d_bestfit_low;
    for c=1:size(eff,2)
        if eff(c)=="high"
            cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/highEffort';
            files=dir('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/highEffort/*.csv');
            %cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/highEffort';
            %files=dir('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/highEffort/*.csv');
  
            fname = files(s).name;
            d_high = readtable(fname);
            cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/RL_output_v7esp';
            %cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/RL_output_v7';           
            d_bestfit_high=readtable("HE_bestfit_2alpha.txt");
            d_bestfit_high.ProlificID=char(d_bestfit_high.ProlificID)
        else
            cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/lowEffort';
            files=dir('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7esp_data/lowEffort/*.csv');
            %cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/lowEffort';
            %files=dir('C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/input_erlv7_data/lowEffort/*.csv');
            fname = files(s).name;
            d_low = readtable(fname);
            %cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/RL_output_v7';
            cd 'C:/Users/plope/OneDrive - Universitat de Barcelona/PHD/Studies/ERL/4. Data Analysis/RL analysis/RL_output_v7esp';
            d_bestfit_low=readtable("LE_bestfit_2alpha.txt");
            d_bestfit_low.ProlificID=char(d_bestfit_low.ProlificID)
        end;
    end;
    
    clear a_high a_low r_high r_low e_high e_low alpha_s_high alpha_s_low alpha_us_high alpha_us_low beta_high beta_low;
    a_high=d_high.Choice_a;
    a_low=d_low.Choice_a; %1 is simply cue 1 (regardless if its high reward or not) and 2 is cue 2

    r_high=d_high.RL_Outcome_r; %outcome regardless of performance
    r_low=d_low.RL_Outcome_r; %outcome regardless of performance
    
    
    e_high=d_high.Fdbk_Eff;
    e_low=d_low.Fdbk_Eff;
    
    
    alpha_s_high=d_bestfit_high.alpha_succ(s);
    alpha_s_low=d_bestfit_low.alpha_succ(s);
    
    alpha_us_high=d_bestfit_high.alpha_unsucc(s);
    alpha_us_low=d_bestfit_low.alpha_unsucc(s);
    
    beta_high=d_bestfit_high.beta(s);
    beta_low=d_bestfit_low.beta(s);
    
    sub=char(d_low.participant(s));
    
    fit_high = d_bestfit_high.BIC(s);
    fit_low =d_bestfit_low.BIC(s);

    
    %beta=cell2mat(LE_bestfit.beta(s));
    Q_le = zeros(1,2); %initializing weight vector cue for low effort
    Q_he = zeros(1,2); %initializing weight vector cue
    clear p_le;
    clear p_he;
    for t=1:length(a_low)
        p_le(t)=exp(Q_le(1,1)*beta_low)/(sum(exp(beta_low*Q_le(1,:)))); %probability of picking a=1 (High Rew Prob Stim)

       delta_low = r_low(t) - Q_le(1,a_low(t));
        if e_low(t) ==1
            Q_le(1,a_low(t)) = Q_le(1,a_low(t)) + alpha_s_low*delta_low;
        elseif e_low(t)==0
            Q_le(1,a_low(t)) = Q_le(1,a_low(t)) + alpha_us_low*delta_low;
        end 
    end
    for t=1:length(a_high)
      p_he(t)=exp(Q_he(1,1)*beta_high)/(sum(exp(beta_high*Q_he(1,:)))); %probability of picking a=1 (High Rew Prob Stim)

       delta_high = r_high(t) - Q_he(1,a_high(t));
        if e_high(t) ==1
            Q_he(1,a_high(t)) = Q_he(1,a_high(t)) + alpha_s_high*delta_high;
        elseif e_high(t)==0
            Q_le(1,a_high(t)) = Q_le(1,a_high(t)) + alpha_us_high*delta_high;
        end 

        
    end

    %%%% You can then plot individuals performance and model estimations

    a_low(a_low==2)=0; %%% First, convert 2 to 0, just for the plot
    a_high(a_high==2)=0;
    trials_le=1:length(a_low); %%% number of trials for high effort
    trials_he=1:length(a_high); %%% number of trials for high effort
    
    Reversals_he=find(d_high.Reversal==1); %%%% vector indicating trials where there is a reversal 
    Reversals_le=find(d_low.Reversal==1); %%%% vector indicating trials where there is a reversal 

    
    figure;
    subplot(2,1,1);
    %high effort subplot
    for i=1:length(a_high) 
        if e_high(i)==1
            if r_high(i)==1 
                plot(i,a_high(i),'.', 'Color', 'blue'); %%% if reward, plot a dot in blue, y=1 if selected cue1 or y=0 if select cue 2
            elseif r_high(i)==-1 
                plot(i,a_high(i),'.', 'Color', 'red');%%% if no reward, plot a dot in red,  y=1 if selected cue1 or y=0 if select cue 2
            end 
        elseif e_high(i)==0
            if r_high(i)==1 
                plot(i,a_high(i),'o', 'Color', 'blue'); %%% if reward, plot a dot in blue, y=1 if selected cue1 or y=0 if select cue 2
            elseif r_high(i)==-1 
                plot(i,a_high(i),'o', 'Color', 'red');%%% if no reward, plot a dot in red,  y=1 if selected cue1 or y=0 if select cue 2
            end 
        end
        hold on
    end
    plot(trials_he,p_he,'k');ylim([-0.1 1.1]); %%% plot probability of choosing action 1 (when values are close to 0 it means that action 0 (before 2) it is more likely to be selected)
    title(strcat('High Effort, BIC=',num2str(fit_high), {' '}, '[', sub,']'));
    %%%% plotting vertical lines every time there is a reversal
    for i=1:length(Reversals_he)
        xline(Reversals_he(i)-0.5,'--',{['Block ' num2str(i)]},'LabelVerticalAlignment','middle','LabelHorizontalAlignment','center');
    end
    %low effort subplot
    subplot(2,1,2);
    for i=1:length(a_low)
        if e_low(i)==1 %completed effort correctly
            if r_low(i)==1 
                plot(i,a_low(i),'.', 'Color', 'blue'); %%% if reward, plot a dot in blue, y=1 if selected cue1 or y=0 if select cue 2
            elseif r_low(i)==-1 
                plot(i,a_low(i),'.', 'Color', 'red');%%% if no reward, plot a dot in red,  y=1 if selected cue1 or y=0 if select cue 2
            end;
        elseif e_low(i)==0 %did not do effort correctly
            if r_low(i)==1 
                plot(i,a_low(i),'o', 'Color', 'blue'); %%% if reward, plot a dot in blue, y=1 if selected cue1 or y=0 if select cue 2
            elseif r_low(i)==-1 
                plot(i,a_low(i),'o', 'Color', 'red');%%% if no reward, plot a dot in red,  y=1 if selected cue1 or y=0 if select cue 2
            end;
        end;
        hold on
    end
    plot(trials_le,p_le,'k');ylim([-0.1 1.1]); %%% plot probability of choosing action 1 (when values are close to 0 it means that action 0 (before 2) it is more likely to be selected)
    title(strcat('Low Effort Block for BIC=',num2str(fit_low), {' '}, '[', sub,']'));
    %%%% plotting vertical lines every time there is a reversal
    for i=1:length(Reversals_le)
        xline(Reversals_le(i)-0.5,'--',{['Block ' num2str(i)]},'LabelVerticalAlignment','middle','LabelHorizontalAlignment','center');
    end;
end;


