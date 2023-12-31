import "./styles.css";
import React, { useState } from "react";
import TopHeader from "../components/topheader";
import CustomButton from "../components/custombutton";
import AllMatchesButton from "../components/AllMatchesButton";
import CustomBottomNavigation from "../components/BottomNavigation";
import MatchCard from "../components/MatchCard";

function Matches() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div>
      {" "}
      {/* style={{ height: "100vh" }} */}
      <header className="App-header">
        <div className="headerTop">
          <TopHeader />
        </div>
        <div className="CustomButtonHeader">
          <CustomButton
            isActive={selectedButton === 0}
            onClick={() => handleButtonClick(0)}
          />
        </div>
      </header>
      <main>
        <div
          style={{
            // display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#E7EFD2",
              height: "200px",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: "99",
            }}
          >
            <div
              style={{
                height: "200px",
                backgroundImage: `url('https://user-images.githubusercontent.com/59392815/274145377-4fff24b8-1b90-4e6a-8dc4-c4f0bc36a564.png')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                // opacity: "0.2",
                zIndex: "90",
              }}
            >
              <h4
                className="box"
                style={{ textAlign: "center", zIndex: "3" }}
              >
                <span>Your favourite team isn't playing today.</span>
              </h4>
              <div style={{ paddingLeft: "45%", zIndex: "3" }}>
                <AllMatchesButton />
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingLeft: "5%" }}>
          <h2>Suggested Matches</h2>
          <p style={{ color: "#A3A499" }}>
            Interesting matches happening today
          </p>
        </div>

        <div
          style={{
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
          }}
        >
          <MatchCard
            match={{
              time: "09:20 PM",
              team1: "FC Liverpool",
              team2: "AFC Al-Ittihad",
              deatalies1: "Home",
              deatalies2: "Away",
              // isStarred: true,
              textbnt: "It hasn't started yet",
              colorbnt: "#F4CDB8",
              place: "Bundesliga",
              stadium: "Camp Nou",
              team1Image:
                "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
              team2Image:
                "https://www.eyeofriyadh.com/includes/image.php?image=https://www.eyeofriyadh.com/directory/images/2023/01/1f7e5ddf8ac73.jpg&width=175&height=120",
            }}
            isRedBackground={false}
          />
          <MatchCard
            match={{
              time: "09:20 PM",
              team1: "FC Nantes",
              team2: "FC Porto",
              deatalies1: "Home",
              deatalies2: "Away",
              // isStarred: false,
              textbnt: "Game Over",
              colorbnt: "#F5CE7C",
              place: "Sports Arena",
              stadium: "Stadium B",
              team1Image:
                "https://seeklogo.com/images/F/fc-nantes-logo-99FDE66D2F-seeklogo.com.png",
              team2Image:
                "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/1200px-FC_Porto.svg.png",
            }}
            isRedBackground={true}
          />

          <MatchCard
            match={{
              time: "09:20 PM",
              team1: "FC Bayern",
              team2: "AFC Ajax",
              deatalies1: "Home",
              deatalies2: "Away",
              // isStarred: true,
              textbnt: "It hasn't started yet",
              colorbnt: "#F4CDB8",
              place: "Bundesliga",
              stadium: "Camp Nou",
              team1Image:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAulBMVEX////cBS0AZrLZAAAAZLHcACoAXK4AYrAAWq3bACXcACjbAB8AXq/bACMAVqzaABQAUKnbABrY4+/aAAsATaguc7jt8/n0+fv++fr319r66OnR3Oz1ztHsnJ+Kp9A/ervdIDeAoc2ht9hQgr7xtLrhTFatwd3kaW9di8IebLVwlseTsdW3yeL88fLqj5PH1ejmdXzeL0HupanphY0AR6fzw8bfP0vjX2bhVV0AOaLofIfcIi3mf4DmbHmlUEA2AAAThUlEQVRogcVbaVviyBbOvi+ECCQBJAqIyA4NekX//9+6Z6mqQGvby/Q8kw8zaSzy5uwrmva7V3fzsLh7GnfmhmHMO+Onu8XDpvvbT/lNyMUo8pwocl3X4gvuosjxotHi3wLv348AwgWkyEtanjXvdDpzy2slHryG5UaOO7rv/23Q9mLkOkCbk8zHT4tlvwtXr9fD//WXi6fxPHEA24k6i/bfA+1txkCN63idx4f259zsth8eOx4eisab3l9B7d53EteKotFtX2IWq6oqB3iVVbUq5MH+7SiKLDfp3P9zUffu555lOcatEF1RTQ6zaZ2a8krr6ewwqQR4/9aA4978/h/S/ACortdZ8r+q4Uw38zAObL257CAOc1OfDSs+tOx4LiA//APUfgdQk9GG/lGuazPzGTEOs9Snu8zMYvzM9jOzXpd0cjMCwXidP1bup5ZlJCP6+mpYm6GiMtiuh5PnGO7Cdbl/q8Uf7NCshyt64VFiWK2nP0LduJHhzYnWcptnF6y1a/owJTLh7pgT4Wkc6HaWb4nozdwxXHfz+7B3KNgFqkc5S0MkMpC44SudeEGCTUCpgOB8v5q8TfFImM4QubdAMd/9Jmp37BjeCH1AtQ0BNUiz0ykVNKdHOkNkhmu4e/bTA35yCHV8xTDcoo61R57hjH/LpDbzyPJu4abY6xmgmqch2OlAJ2D7DE8dwN+QvGAHp/bmDL81TPVwsk2BDZm+R8O69axo/hu8fgDrN9B2yinQ6KenCZvnJCetOsFtXYh/mvAS5angv8Yv9B2QczpFZi8N8Di/bFH3iRURj4c5GIs9JbYSMuFmyFNzD0q+A4KzIfov+ORoggQGeOq4w7fN4Q/A68hK7n8N9jYxnEdEekEYYiTw+7SF/51QcfIBguwKYixTj6wB2PhZPGIfgHTyF3zXR89Ibn8RNkE1LMOYPQOSewKXsdIq00YrAs5ODmioK3QjZiVhdRPJ3dN7rjP0Lsjru+SXgBF2Af+fmEJ7ieDSfIFnTPZgTP5LcxifniI/K7RvIvdo+kfxF902J3C7+BXgeziE8hiayk2k+GXhfFe2TTjiWsEp84iqLW0Z3jfLTwNyKvgRHr5vGT+T8YOg9pA37oklDDQTFzPyFNvnk4+W+xbqJjC8Qph4xu/yamahTk4GhXwQFH+p1ZvIclC2h/Qi4Og5Mq58yXJEjHcrNNg4CGoENG1UsKMpycWreqeAZWeod+RR7hzL+cKOu3MrQk1eX8EywQMzRLUpM9DrYobBKHw/HNY1UQmOismdnJApR/Kr2UDb5wL4MbLmP/Zc48gdaWi2+vWFItRm5HaH+fvh+cSuOswyUKd6up2g50Jyi1OWzioN7ToI8Q2QYjJkyAnHP4IFbhht1AwdfFSaBg3BaKPkOCYpWIdPf7Hxor+GeNRHcot9nYYZRsjAJxdCrEOtbhsswc+E6xnekiwRvNz+ODn51wSD4GamAMrC+FzX9RkTgJBfYycMNw3he0E8EE99S5kVS3j65yJ2KRQUEN7zCX3wooCDqYbx0ARC4tTcrScDkVAV1WCy3pkYC+x8R2+32sagUgQ7xedAuLTDgoKE+xnsEwsXjgnFRH7biuDjFFDt1JxNVh++uprMTHDJELZIpqHNfnqaIZ8qdKDoa0DEn2Qg/ZbhtUmncmQYJKpwPtuF0nmADAOz3ou8sdfeLB8eHpYbmaaDZE088VytTDujF1/Fvj8tMDqzbrU9o/Ux5+pYHjiMMteDGv61BynZejYrXmLJa+Ajs7+7vOski5aDV/Stp/WXbCGTXW6D1tVBKAy5OrMhoLjQ9hee1fke9sEz5j3wd76e7dFKbbLbAqKDgA05lHeXY8OLrBut4xp4tSAT6rjjZY9ohlPglBG2wJSD4mNFb46U9+aG953b6s2tZINk8puR/2E/9cLmlM/QQ3fv5pA1AdyN1o4siduOXG9Onr+agemHW3jBmbkVj57xm6dAziax5tcJ/b2HSlWhHpH/pTyZtPg9Jt+DMu8t5vceUQm42sKRuBp+esOS3meBns5Ws5Q1WoM7ISa9QtXyrgIEOMgERL7NZPiZoCuwA421wreRdRvI4uGbElcbuxJXe3SNRGhYaYOo6tDHd55MhnVGqD58CAzoJ9fuksllWfqUNBzPaYhBDHPUGCNA7y6BKluyF3HbyHHGbUcKV1vVYG+cc+Yi7Q7TF/BhqG7XBPdAmTdKEuyciskBCQcHG2MO1+0AL9Hwmb03pIuJxIVbhasVCIyZ3oRZHJqzAWiqHs7QJ1qdRsIg7w4VADbVIuZA/QWO+wjbd5Cp5HCIvYSL7BW42mOrKbiL2qd0D0VkZ+aBcgYgOC3RXJPGW45ddMzbUK8POkVSmVKUEGZtNIa2Y0ncLrKXcbuRwu19uyj0V3YAvrYwwY/o6lGQXG/RTbsqLqHM4HBOogXmBHp2Qm9YDUG70Pd0yb4FLrGXcbVlInG1pcLtEpvs83tmTifqXTBE5/BQw4rkyYUTgfUNM5LsMMue8zDI6t3ujHnKHmWLjIwkLnhyias9flPSUuzD0gQCvp09C3khnweo18j828hZiIMdNwIjqm0b9LY4xSetfA3BiDBZQV3odRC3O1e4XcOSuL0bhas8wiNqDugo2TygvlIijM4SC8k+hx9N3kEYQP6XJh7fXxr7bUIHIYDKQLZMJK72oMxxLoPNI6bfVWDbIYp1m6LjWrMZm2RKLkeHe8cBNq9D0uNDiPmhSGSIy5tEvOBTpALo0zclN+VwOy3RjXh0yeViYBs85xnmfaBUATgyqh5vHYdNGGyZ2QwnVnU4FcIQgQFsW+B2Fb2gvQr3RhLccd2uwEUvXECSFUPIJn95SrN6Xc58YrTHzwO76HQxOocHSn5BBQ8CF+83LUMKZNNSCcNS4SaPEtdyHwWugSF1QrElxSx7aG5RxlAwQlHTFS+4ifA8ajPXBIVWmOzeuJ/wpBRBe3IUnPJ2XutB4orkHHAtfDK2PXz0W9VaZAspafSjG6HuLyLnAYOzvVMPxdaNz6ELeKrohRRMHfmfZK9nOV2Jy6YJuAZqDCpnWqpvgDuoKet8cCK0pJELrrUA1bWDw7E5BEmdWQj2KtzGxX2TXsczhAMCXH5DxDUg7IC/il/l+WLykgIXbb3Q2qyolMlj8gXeOau3R5G2zXxR70BerbKTrmLvjcwcwI9xiEFcEizhouOdxcGJX718PWecMKGAoSqBR5HDnIgSwQ7T+h2hITtJlZNTHrX7TbL3xhDujsJUW+IipwmXHppyErE/ZaoNhSkyhIOutnHcJ/aeMn8L8937EXVPJayKvd2bscIV7PUECOMipwnXMrpYpYavg5meN5UHGc2TC0XaQ4RSnsX6xWXHeazKTw1b3hK3JcP2jWQvJT7ochnXiBZPlJIgo9GE8/iymUnV2yKKHuA/cIJaQt9d1Jniqy3Z220ZTlviMqc54YJPBa4RUYA2ojvygd9fAeSVSw9IvXMhs1rV9ocTjXi1dmuscIVR3RhCexnXnStcj1MhzCQm2YenYuzpJ+4dMLvV5Xr9uytrso62J9gLuKSyjGtgPSUSzGgxFrhJe5NQrO4pf3tFDih0C1SKlKsyPx4IK63flrgibUNcA7054+KtwDW8R1fSiwGapFB95DMZEppQx7K63AX67ooLbTNXuMKXI67bUbiQp0jcpGtZErc3h3cAZ1jEn+CWGpwcaXN0G4OPuPYZvH9rIXHJ8zGugQX0jWDvrSvZ29t4EhdLacMBhfY/qg0EW3Acc8h3ID34DLdGT0o8JVwDGyOMi7c3kr13kaRXu3MkrnbnGej19U9xIbQaP8F1KdslXLwVuPC1lsBtwQMkbo9qNcLtjVzE/cRMfg2X2dv2BHsFLhinFOsNODyJy7eEC9H9J/R+KV94DhYS7YQfvekJXMtdRBJXsBdxIYcxZMGyaH0t3y/1OUKP0BP0GnAykWKF95W4XAoTLpZtnjC++df6/JX9tskOnySu4T42uP1E4fY9hQsnJW67/6X9fuWveuTxvI3gs2GNJHs97M9IXG3hSVztPvGaguUrf/Wlf5YxVdALPle0FzzmqSxY4FbgauOLAu0r//xlPGLjdMeRwm07Cpf8P+PCpxK3e1GgfRWPPou/fGJHNQLiPgn2Yozh+tdjnqoC7T6RuNrF8Hn3kRoVfz/kG+qCfIN9LuS53F6gNhCFV4956qoCbazyd03hrj7TVplvXOdXSgwBC5hAALeJqdxeYNx2Uxg2mVeTjWG973+Hq/Kri3yyuTJ7GhNLiNGY11Mjh9teeMu4UBWrAq2ZNXdk3xWE50/Da06qfLLJnxtepG9VAa7GxFaXxbjEadFuAzUTuFD/KmGq5G/U4lus96eQwqYXWn2RP8t6QaFyQwJqJKwX0EoJFzktcLuOJXG7/1O4kcJ1DSqFoV6gxu5qbao09qJeUPWRQH3j9HWVUWiAIpBxsb0g24vLROI2ZajmPSlc7ruCT/DFR0Nf5LIX9VHXdTtSwJl5kEkzhgqsB8EXyTovUm3Nx5aCU5WhK9iL9OIt1oNBLSaL2uSEFZeoBy3hy7n+1eP0UKnnYdNb1r+Miy8o/thrcFWDw8VUnZ9HPSoy3iA7y7n/8dnXL+tfVe8HUz6x2heqM8r1vihxly1VKDX17zfJXtcSbe2RrPexRxKmpjnjorA4BVf1ft8V/Q3qVK32IU44pz6bcYUDPmmRT3OJ1lVyvUmWil6Pbkc4lasC4N9u+vy+ngxKpgckd9XfQEUgRkNtvtrvzBTFkbMGcj9H4vYUbtPHuZHspQSPCjTRz0mHaqWErll83c9R/St7N9zlNg10p+ezn6Wyf6U8kLLR3jfZXrgxBHsRl6ZeHe5fUd9eXEWxKvfB9/0r1a8L0M64DCyq8nhE4xL9OnFSsrfXkuyFxJLbC0Qv1hXcr+P5LTD8uF9vp7ppph/6deAwHe5PCsetrudQ5/6kxJXaC4lW1JW41M1gXIvKNuxP6j7jroamKRZcqD/pNP3Jph+LHuV1MlBIFTa960ZK7dajwhXfpwJtLHHJJLEfG0DNvRMV1tAUrf7v+7FX/ec4A9UPuMdHXf64AW4nYp6KiSXXalygLRjXQ9li/zmcQoQLaFiNQjuYgf5J//mq344TEXF+cAr9XPTbBa5oLyAuC4pw8da1rOSux/32bLrSBgEO14Ttrnb2J/32q/mCnu6ERrynfvgygBDK8wXGZfZSIk23XLDAa1u8VIPzhfRlJbYd9DAkH1jK+YJxPVBp5im2zl2uAncSgrrSSvh+IHqrbdle4AQeLUIUSt79nJZqeJ6CzbJdGBD/svN6pU3jT+cpF/OjkBvkxxMwmAduA7Jjmh9pt3PPRfYyLrL3hsoHb36HOk3zIwGbheUbaaqd7l5DCqrLD/OjZl5GG0bVDBWBJxwrfb8HtQ5Z1XrLMUYHUbDA7Y0VecaYR3V7pDDGvm9VZ+eSxv+EHMp52ccxv5oPZgftkFN6SWOG4iUvNFp9aeaDffBXUYTjweQ26dxdzgd53qaVMS7xgGuMRT7xo/ngxTw0PHMOkL3j52+QftTTcoerKc08VFPzUME3nofqWRbYGSkS/ueU5dsXetiP56EX818OCT4twAzN4N1E17kOSFRfzX9pJ2cWB2c+Uexi88BrWl/Mfy/n3exd8I0xv/VpnjSIA9p0++G8G0ftBY2ZY+5KnmMS1CD/et59Md8nt4Vd0RKRaP9oVfv14E0nBQ3CLAtBcLXuq/l+jAkUbgxh9hq+MKtQE4/Zz+b7l/sMOk9DdqAVMU4YIUKgVy+GtJnBXXGxzkAyyWYDbAoiHr43zTI06rFDiPvJPsP1/kaGbcIzOHgb+Y05KRKzQoIhqjFfwxzCG+5qnCr0GGL/CtcoUhHVEPan+xtX+yrUFj3GOa0U4ehwR9pyCuzTqhrg6C+rt5PBYD/NbNp8K1JQ+JkgmLeUoFKxecLwGLlf7Ktc7ecQo6sh+epzQMETeZGR4Lexnr4KxZ6EjLI1T6zrtBOAKfvebPZzoi/37B7ErtQ6V8siGgdIMSQdhFQDpHqmWvggBJqAlPL8gLQvHyBsjtTe/mwfiWralty/MkUQxu8HyGb0RDXaV2naZ1rle8PHQoKaSswCtYG2saDM+vX9K3q3FlKM+2Y5Mq58N0WOoiGH39E4hxmlQ3uTPIP2ymN1SmqmiuDf2je73q8LcN+YfTUuTCLnj+g9n/38KBcoAxPTGBrYvJoZqzRvffzWft3lPmFTFJM2H5E4lGLBAwtMIuQqTfimsR3wQgESLPYJnV+EvdyfTGV1So/dhiEfEJk/4wZ+TMt1GhYJeFNW2+BP9idxX9S92BclNiNMIDeGxOyU+Tydzd51MVxDxbd3evZn+6If9mPhqqhUIycGAggY5jXl9Unsy/G6I+0m23+6H/vJPnC9LbdytoPdPVovq06xj2Z8FEubxbEmofzxPrDG+89Js/9sh6TXNDNttgeLUu5I4JtAQLT/4f6zJve9qQpq9r2JEipogp2K/0M21zi0L/e9PSP6k31v7Xq/fS/220Mzm5EaQ+zlpGfwLHtff2e/Hb/eST7Z55fNbEh69OnONLlC/4v7/NpPf79gB/a/8fsF7T/7vYb2X/0+Ba//5vc4dP3K74/gr+5f/f0RXz/7vVX0b/zeiq//5PdlDTj9nm5Ev6cb/env6f4P5Rfydjf6rAYAAAAASUVORK5CYII=",
              team2Image:
                "https://upload.wikimedia.org/wikipedia/sco/7/79/Ajax_Amsterdam.svg",
            }}
            isRedBackground={false}
          />
          <MatchCard
            match={{
              time: "09:20 PM",
              team1: "FC Nantes",
              team2: "FC Porto",
              deatalies1: "Home",
              deatalies2: "Away",
              // isStarred: false,
              textbnt: "Game Over",
              colorbnt: "#F5CE7C",
              place: "Sports Arena",
              stadium: "Stadium B",
              team1Image:
                "https://seeklogo.com/images/F/fc-nantes-logo-99FDE66D2F-seeklogo.com.png",
              team2Image:
                "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/1200px-FC_Porto.svg.png",
            }}
            isRedBackground={true}
          />

          <MatchCard
            match={{
              time: "09:20 PM",
              team1: "FC Bayern",
              team2: "AFC Ajax",
              deatalies1: "Home",
              deatalies2: "Away",
              // isStarred: true,
              textbnt: "It hasn't started yet",
              colorbnt: "#F4CDB8",
              place: "Bundesliga",
              stadium: "Camp Nou",
              team1Image:
                "data:image/png;base64,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",
              team2Image:
                "https://upload.wikimedia.org/wikipedia/sco/7/79/Ajax_Amsterdam.svg",
            }}
            isRedBackground={false}
          />
          <MatchCard
            match={{
              time: "09:20 PM",
              team1: "FC Nantes",
              team2: "FC Porto",
              deatalies1: "Home",
              deatalies2: "Away",
              // isStarred: false,
              textbnt: "Game Over",
              colorbnt: "#F5CE7C",
              place: "Sports Arena",
              stadium: "Stadium B",
              team1Image:
                "https://seeklogo.com/images/F/fc-nantes-logo-99FDE66D2F-seeklogo.com.png",
              team2Image:
                "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/1200px-FC_Porto.svg.png",
            }}
            isRedBackground={true}
          />
        </div>
      </main>
      <fotter className="App-Nav" style={{ position: "sticky" }}>
        <CustomBottomNavigation />{" "}
      </fotter>
    </div>
  );
}

export default Matches;
