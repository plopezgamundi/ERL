function fit = runBias(p, a_choice)
%global data SampleTrials
global SampleTrials

trialfit = 1;
partialfit = 0;
fit=0;
SampleTrials = 0; 
nTrials = length(a_choice);
%a=x;
for trialnum = 1:nTrials
    %rt = data(trialnum,2); 
    stimchoice = a_choice(trialnum); %chioce
    SampleTrials = SampleTrials + 1; 
    pr1=p;
    pr2=1-p;

    if stimchoice==1
      trialfit(trialnum) = pr1;
    elseif stimchoice==2
      trialfit(trialnum) = pr2;
    end
    partialfit=partialfit + log(trialfit(trialnum));
    fit = -1*partialfit;

end 

