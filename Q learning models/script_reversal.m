clear variables

a=[1,1,1,2,2,1,2,2,2,2,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,2,2,2,2,1,1,2,2,2,2]; %% it must be 1 and 2
r=[1,1,-1,1,-1,-1,1,1,1,-1,-1,-1,-1,1,1,-1,-1,1,1,-1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,1,1,-1,1];

%%%%run the model 10 times with random initial values%
for zz=1:10
    clear E LL
    hh = @(x) RescolaWagner(x,a,r);
    [E, LL]=fmincon(hh,rand(1,2),[],[],[],[],[0 0],[100 1], [],...
            optimset('maxfunevals',10000,'maxiter',4000,'GradObj','off','DerivativeCheck','off','LargeScale','on','Algorithm','active-set'));
    abeta(zz)=E(1);
    aalfa(zz)=E(2);
    aloglike(zz)=LL;
end

%%%% find model with minimum log likelihood
[m idx]=min(aloglike);

%%%% store parameters for the model with the minimum loglike
beta=abeta(idx);
alfa=aalfa(idx);
loglike=aloglike(idx);

%%%% loglikelihood for random -> choice at 0.5
loglikeRND=-length(a)*log(0.5);

%%% Compute pseudoR square
Fit=1-(loglike/loglikeRND);

%display alfa, beta, Fit
['alfa = ' num2str(alfa)]
['beta = ' num2str(beta)]
['Fit = ' num2str(Fit)]

%%%% once you have estimated alfa and beta for each participant you can
%%%% run the model with those values ("alfa" and "beta") and based on each participant'
%%%% actions and outcomes ("a" and "r"), and look at "p" (that will represent the
%%%% probability of doing action 1). 
Q = zeros(1,2);
for t=1:length(a)
       p(t)=exp(Q(1,1)*beta)/(sum(exp(beta*Q(1,:))));
       
       delta = r(t) - Q(1,a(t));
       Q(1,a(t)) = Q(1,a(t)) + alfa* delta;
end

%%%% You can then plot individuals performance and model estimations

a(a==2)=0; %%% First, convert 2 to 0, just for the plot
t=1:length(a); %%% number of trial
Reversals=[1,13,25]; %%%% vector indicating trials where there is a reversal 

figure;
for i=1:length(a) 
    if r(i)==1 
        plot(i,a(i),'b.'); %%% if reward, plot a dot in blue, in y=1 or y=0, depending on the action performed
    elseif r(i)==-1 
        plot(i,a(i),'r.');%%% if no reward, plot a dot in red, in y=1 or y=0, depending on the action performed
    end 
    hold on
end
plot(t,p,'k');ylim([-0.1 1.1]); %%% plot probability of choosing action 1 (when values are close to 0 it means that action 0 (before 2) it is more likely to be selected)
%%%% plotting vertical lines every time there is a reversal
for i=1:length(Reversals)
    xline(Reversals(i)-0.5,'--',{['Block ' num2str(i)]},'LabelVerticalAlignment','middle','LabelHorizontalAlignment','center');
end
