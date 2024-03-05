function [nll]=RescolaWagner(x,a,r)

beta=x(1);
alfa=x(2);

Q = zeros(1,2);

nll = 0;
for t=1:length(a)
       p=exp(Q(1,a(t))*beta)/(sum(exp(beta*Q(1,:))));
       nll = nll - log(p);
      
       delta = r(t) - Q(1,a(t));
       Q(1,a(t)) = Q(1,a(t)) + alfa* delta;
end
