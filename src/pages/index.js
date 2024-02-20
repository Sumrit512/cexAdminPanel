import Image from "next/image";
import { getSession } from 'next-auth/react';


import { Inter } from "next/font/google";
import Overview from "@/component/overview";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
  const session = await getSession(context);
  alert("session",session)
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  return (
 <>
  <Overview/>
 </>
  );
}




// what just happend man , i mean literally 7458 loss, so now let's do one thing let's risk it all, let's go for the 60 lots and take out 2 points first
// ,because less loss is also profit, if convert this into 1458, then that is also good, so today it will either be 3k more loss, well i was going to risk it all, but the volatality was really
// high so i missed it, man sometime it's hard to grab the momentum, let's accept the loss for today, which is gonna be near 6.5k including the trading fees and all, so i will be left with 
// around 13k, well the target can be achieved it's not very hard to do that, from next time, let's make the discipline now, do whatever the calculation you need to do, but make solid ground
// rules, so rules are
// 1. I will learn more and more.
// 2. I will continue doing the trading in more lots.
// 3. For banknifty it's 60, and for other indices it's 20.
// 4. volatility is key for me, more the volatility, more are the chances to make profit or either loss.
// 5. be quick in order execution, don't be late to follow the trend.
// 6. Prejudge the trend.
// 7. don't follow the trend.
// 8. if misses any opportunity then just let go the trend.
// 9. if you gets late to make the order at preferred price point then follow it only upto 0.5 points, if it goes beyond that, then let it go.
// 10. i will also prepare the levels, because that is necessary and i will backtest the strategies only in one lots.
// 11. so my max loss for one day will be 1.2k, if i reaches that first then i will simply end the day with that.
// 12. so if my first profitable trade crosses the 1.5k , i will simply put the Sl at 1k and trail my SL, my priority will be taking 1k at least and for my second trade i will .
// 13. And if i makes a profit of more than 6k only then i will take BTST otherwise no.-