function [nll]=RescolaWagner_2alpha(x,a,r,e)
%a= action, 1 or 2 depending on which rew stim was chosen
%r= rew stim outcome, 1 or -1 depending on if it *should be* rewarded or
%not
%e = effort outcome, 1 or 0 depending on if it is a success or a failure

beta=x(1);
alpha_succ=x(2);
alpha_unsucc=x(3);

Q = zeros(1,2);

nll = 0;
for t=1:length(a)
    p=exp(Q(1,a(t))*beta)/(sum(exp(beta*Q(1,:))));
    nll = nll - log(p);
    
    delta = r(t) - Q(1,a(t));
    if e(t) ==1
        Q(1,a(t)) = Q(1,a(t)) + alpha_succ*delta;
    elseif e(t)==0
        Q(1,a(t)) = Q(1,a(t)) + alpha_unsucc*delta;
    end
end
