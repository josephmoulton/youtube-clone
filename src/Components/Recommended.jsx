import React from "react";
import "./Recommended.css";
import VideoCard from "./VideoCard";

function Recommended() {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommended__videos">
        <VideoCard
          title="How to create an amazing resume"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.philanthropy.org.au/images/site/misc/About_Us/Initiatives/2016/The+Channel+Logo.png"
          channel="The Channel"
          image="https://static-cse.canva.com/blob/951431/1600w-y9mFJemyO0E.jpg"
        />
        <VideoCard
          title="How to create amazing thumbnails"
          views="4.3M Views"
          timestamp="2 days ago"
          channelImage="https://cdn.dribbble.com/users/146798/screenshots/5811891/media/2ef116ad05a9877767389186a04c2669.png?compress=1&resize=400x300"
          channel="Wow Channel"
          image="https://i.ytimg.com/vi/x-FLu8sOt_U/maxresdefault.jpg"
        />
        <VideoCard
          title="How to find concept and ideas for desings"
          views="1M Views"
          timestamp="1 days ago"
          channelImage="https://cdn.dribbble.com/users/255512/screenshots/8388554/media/6857ebeb40dd2cc18010362dde7022f4.jpg?compress=1&resize=400x300"
          channel="Design Channel"
          image="https://static-cse.canva.com/blob/951428/1600w-K9NTgBT1uG8.jpg"
        />
        <VideoCard
          title="Standard youtube video thumbnail"
          views="9M Views"
          timestamp="6 hours ago"
          channelImage="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"
          channel="Youtube Channel"
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACCCAMAAACKEy/7AAAAxlBMVEU0svUnr/X////x+Pr4/Ptov+zs+PhxxfAosPRxwu9xwu0osfMys/Rgvuxivu8xsfac0u3///phu+91v+Ubq/T/+MH/9sPh9PzE5PHO6/aSzu+o3PK74fbC4fZBsu+Jy+6Axe+v2vLc8fPy88n17sFJs+ni6sqBx+K56/kAo+at3OdkveRSuPLm+v2n1ehKt+MApPSi0fNjs90apN2gzNmUzOCt0dbZ68+/29NsuNPs6MLQ4s+91MK63Ns/qNSvzcGeysmN0d7B2cRbAAAJA0lEQVR4nO1dC1ujuhYlgdIUKFAagSAmQJtyO0Wt04cdO56j//9P3R3qmXF8zD1qHa/Q9VGEhEcWa7OzoTtWcwhCjqM1HsQjH92EPwJE2qCmpnntoNkafGI1KQEgWjNorlV69D8RoAgQOFOENM9DnlZ/AD/XPj3I9BQrfHGRFmQBmrkZ91wROEGQVdztZZUdCPcpmZ1Pxd6jNU+j8Gnn9Cw+P2VmGrC86J0yFsEai/vxWWE94oS6Cf2I9r4Wd3oqnq4Rn0mjl+kyT41Et7hZnrrcHPqxIR7yRMSM5KcS9CfPfin0oelaes5kkehZpQuzJ0/j6Jw94kn9AfbRhzT4lZhGuqnrBfNpEB0zGQVdJljORMQYkyYr8iw6Lh7y9KpogE3+MS1+HWz3SwEwfIpk10UB5xXv9yupW67mmsLVUOBW/AFPkisjOJ5+TJNfB+QKBbkL0ommuhOCNMGRJzOYQTEU/eJxiWvWxt7/VHeogwD0QYiAlDf10DNxg5scY/046Xwqnq+AR/vYDD5Vx/I6oA423aarqbWL5+fyQq9DreenihNeh4PdNgsHu20WWsWzJXbbFj/UFp5tuT/bomdbeB7stjlok55t4dkWu20Lz0N82xy0yQ+1xW4PejYHbdLz4G+bgzbp2RaebbHbtvDsv7X/9H6X//mqi7j3K/+SOMHTKFXZkPR+KxyKKJ3Tuyz0X+s0BHXURujJNBD66LQIaaQupJRALbH/Xbv+DV6ip0eSlGtU5P17ufV2nipk9TE8cXGfkZPUdUIcP9FiJ+89SNEn4ljmFvE8Ik5OfE79ixeS+Q1e5G+pwPmcR8WC2MhT+Uggrl1nIGFfCYlQHKlEJZUGq3jzuM5OSmNjWufGanUKE9TBjHB8QXdJTWpb0NxD6ak0faLR40HBBsxmDGrRLrX2raMWXhjfnmB+hvu0Er7gdq9DueB0mutyTocu5Rk6iYRvOahKYK6seDrEX+c0NYf+EHZCxOpwEVwMZZJU3MiTJLA7vSyBPTrJRUCqXmD41LFNxuciqoKAZ4CAun4SvDFx+mX+FvV1pqe2luLYZIQx2sWWhnI9IFoRox4OToyC4YREUWwkFJyTN8RDOk2NwsTWBeY8YhbWIyMqcMqxyYyIM1yYRs81YmbK1JDA06PxIPatBS1YEBUGFj0zjszqba7phXECzbEZoAxfkAQPmaLm1jyRFqUoAJ56jzNWGp1pHKmWeRkeIpQafamnieIZW7gMQK8Tk+OYD7GI9Y7EiZssxCADnrpPNa/KDWzEcB01z1KXolh8NfO3dQovtFtvgXMKHDl1jTyOaQ93djyd6AS5wBPuz7yIsa5HkfJWiqeNUn1qK5601tPlRUp9nYPiXL9gjNj4QkbmqZGlJlc8tQ6nPMU94ClPC15FcDg9nb9J0JfGCVzxzAZiLnAZs6nAFtnpWTAicBCbLmHFalAuhoLf6WlPgedC8TyvohgsoALtc53jFFlYAJkFTiJ9ERhZXvN0OGYSjpwxxpk+5BWLFjLpvIXlK3gOUuJwZpzo0eJ4wHQ8JDQ1XEJyzEzgiSOG/cWpfmKkKu8eTHzo0RMDeMazQRRhpWdlxjQ3JIbdTc4iTWI/xmmEBXg5w4d+8wyOYpiyYMkAbuUkM1hkzP6o3UKXCIZKuR/7fM79Y0twzeuIyvN4koKEvaFIS45gRXCVOOrJRFLkCtvOushKRdblidRE33YFF738rEO7PYeIwPaPZ8INMkcE1NGc4Vm8knRoVYkQSZf20zNrD/72Jc8rzi7yoeoP9G2Eep7jqciGUFqPJqFqBal5nSBLVEdbd5BE88CVQi8Jy56just6KxUrIYJgZzX6RtvFU6qq3k0FW8RRG74xEnxbHF8zedEOz8jyP9V6a6Dwp59XfkPoXVuxr+dsuN7eziZJPfKJ3L/nYRXWCcTmDlhrXYOQDZYsf+pLtOrtrXgee9KT9peBvVqvkCbWK4nkaj20Hace7AUUyvVyueSz9bKD+GpdAlGnXC5X0p2UcFWQuhM9srqUsPBeou6J53I0Hq7DUbgqR5ejjb0ZX10BHS4Jl9wh15PJOPx2dTXe8s1oFJbI45fjyWh7/v2blESeE9K36XosqQweDsjYF/Zjt/b197C8vv5rvC1H37aX50frRXhNvNnVdhWWoCmdTZb9y2A9+jbeLK62ROOTS/vv8Ft4sxmVo835ZDyZLcdf4WpN3vzQ/zT2Zbezo3I+XYflbDQar+XRcj7aQH+xDMdrcJQO2U44ncvJdja+nk8mRHO248vRdhau+Ci84pvxTbhZj2fb8d/X7zSgc0880fCopOurG7C+b5uRPLpZhBt4kCzBkpVvkuEaodnl9twegZ4beJLZjtZLeR4up1dHW7q9uvl+ux7/tfo+uXon578nf+sBz/VRONksw+14wjfhJCwpkZPL76MOeBdQG/VHR2Cdm3B0pO7PyRYcL+h+HW7C5SqcjJdfwu3l5SSc/V/z1M6XsizLW4jf17cSvOr1DAKh/q3kt10IeNxb6VWrclVKulrPkOOgsoSOiK+Gq5KXq2n5pbT5l9X58mZme+9yg+4rTuAU2SryUyEagQ6lfsnlQKdB1SAg6DcciBVVtAj16k2Dd9eL1pEfhIOofptSV74bz/d4H+9BiLeDpqI9p/7Ur44UfVqXO7s4sN5C221a77b/1hy+/2waWsXzYLeNQau+/2yJ3bZGz7bwbIvdtoRna+y2JTzb4m/bwvNgt81Bm3i2Jk446NkYtInnwW6bg0Oc0Cy0Sc+28DzYbXPQJj3bwvNgt81Bm3i2Jb5tjZ5t4Xmw28agUTw9+tz/4W6U3VaCk+eoKJ6BystrAHhUCP5M5jnw1JOeZXVh6nbVZ7e0W7y/bD2e/1x8tOczxd3nih+d5xWnzyJsMPF4mPAdT2w0BmpYLXOfGuqC+obeFNQji/X8yZGiDrcsq1fDujc9KvhRbD1R/E/lb4ufO+D+ztONsJ72n7ZbNbCGqKFdhNj/TPXvLNlqIvaDYmLfX/4xoXp6VPzrnj8OiH49z7Nb23dr987z9OnvWsBN5jqkKZ3k86j6qCU/svfRDTjggAMOeIT/Ajr76LcbdAKrAAAAAElFTkSuQmCC"
        />
        <VideoCard
          title="Grow your youtube channel easily"
          views="29M Views"
          timestamp="7 days ago"
          channelImage="http://i.imgur.com/nrWlBuF.png%20http://i.imgur.com/rXDvyMq.png%20http://i.imgur.com/6eEXsX5.png"
          channel="Grow"
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-f41731052ef38859a77214e2be972d69_screen.jpg?ts=1630950507"
        />
        <VideoCard
          title="How to create an amazing resume"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.philanthropy.org.au/images/site/misc/About_Us/Initiatives/2016/The+Channel+Logo.png"
          channel="The Channel"
          image="https://static-cse.canva.com/blob/951431/1600w-y9mFJemyO0E.jpg"
        />
        <VideoCard
          title="How to create amazing thumbnails"
          views="4.3M Views"
          timestamp="2 days ago"
          channelImage="https://cdn.dribbble.com/users/146798/screenshots/5811891/media/2ef116ad05a9877767389186a04c2669.png?compress=1&resize=400x300"
          channel="Wow Channel"
          image="https://i.ytimg.com/vi/x-FLu8sOt_U/maxresdefault.jpg"
        />
        <VideoCard
          title="How to find concept and ideas for desings"
          views="1M Views"
          timestamp="1 days ago"
          channelImage="https://cdn.dribbble.com/users/255512/screenshots/8388554/media/6857ebeb40dd2cc18010362dde7022f4.jpg?compress=1&resize=400x300"
          channel="Design Channel"
          image="https://static-cse.canva.com/blob/951428/1600w-K9NTgBT1uG8.jpg"
        />
        <VideoCard
          title="Standard youtube video thumbnail"
          views="9M Views"
          timestamp="6 hours ago"
          channelImage="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"
          channel="Youtube Channel"
          image="data:image/png;base64,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"
        />
        <VideoCard
          title="Grow your youtube channel easily"
          views="29M Views"
          timestamp="7 days ago"
          channelImage="http://i.imgur.com/nrWlBuF.png%20http://i.imgur.com/rXDvyMq.png%20http://i.imgur.com/6eEXsX5.png"
          channel="Grow"
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-f41731052ef38859a77214e2be972d69_screen.jpg?ts=1630950507"
        />
        <VideoCard
          title="How to create an amazing resume"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://www.philanthropy.org.au/images/site/misc/About_Us/Initiatives/2016/The+Channel+Logo.png"
          channel="The Channel"
          image="https://static-cse.canva.com/blob/951431/1600w-y9mFJemyO0E.jpg"
        />
        <VideoCard
          title="How to create amazing thumbnails"
          views="4.3M Views"
          timestamp="2 days ago"
          channelImage="https://cdn.dribbble.com/users/146798/screenshots/5811891/media/2ef116ad05a9877767389186a04c2669.png?compress=1&resize=400x300"
          channel="Wow Channel"
          image="https://i.ytimg.com/vi/x-FLu8sOt_U/maxresdefault.jpg"
        />
        <VideoCard
          title="How to find concept and ideas for desings"
          views="1M Views"
          timestamp="1 days ago"
          channelImage="https://cdn.dribbble.com/users/255512/screenshots/8388554/media/6857ebeb40dd2cc18010362dde7022f4.jpg?compress=1&resize=400x300"
          channel="Design Channel"
          image="https://static-cse.canva.com/blob/951428/1600w-K9NTgBT1uG8.jpg"
        />
        <VideoCard
          title="Standard youtube video thumbnail"
          views="9M Views"
          timestamp="6 hours ago"
          channelImage="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"
          channel="Youtube Channel"
          image="data:image/png;base64,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"
        />
        <VideoCard
          title="Grow your youtube channel easily"
          views="29M Views"
          timestamp="7 days ago"
          channelImage="http://i.imgur.com/nrWlBuF.png%20http://i.imgur.com/rXDvyMq.png%20http://i.imgur.com/6eEXsX5.png"
          channel="Grow"
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-f41731052ef38859a77214e2be972d69_screen.jpg?ts=1630950507"
        />
        
        
      </div>
    </div>
  );
}

export default Recommended;
