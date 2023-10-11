import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import StadiumOutlinedIcon from "@mui/icons-material/StadiumOutlined";

const MatchCard = ({ match, isRedBackground }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const {
    time,
    team1,
    team2,
    // isStarred,
    place,
    stadium,
    team1Image,
    team2Image,
    deatalies1,
    deatalies2,
    textbnt,
    colorbnt,
  } = match;

  const cardStyle = {
    backgroundColor: isRedBackground ? "#FFF4DC" : "#FAE5DA",
    marginBottom: "16px",
    // width: "100vw"
  };

  const buttonStyle = {
    backgroundColor: isRedBackground ? "#F9DEA2" : "#F6D3C0",
    borderRadius: "50px",
    padding: "10px",
    width: "80px",
    textalign: "center",
    border: `2px solid ${colorbnt}`,
  };

  return (
    <div className="section">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // margin: "20px",
        }}
      >
        <Card
          sx={{
            ...cardStyle,
            width: "80%",
            backgroundImage: isRedBackground
              ? `url('https://user-images.githubusercontent.com/59392815/274139927-42e8652f-90dc-45c8-a870-9daf03b46732.png')`
              : `url('https://static.vecteezy.com/system/resources/previews/024/382/911/original/football-player-silhouette-transparent-background-free-png.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={cardStyle}
        >
          <CardContent
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // margin: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={team1Image}
                  alt={team1}
                  style={{
                    width: "50px",
                    borderRadius: "50%",
                    margin: "8px",
                  }}
                />
                <div style={{ width: "90px" }}></div>
                <Typography
                  variant="h5"
                  component="div"
                  style={{
                    color: isRedBackground ? "" : "white",
                  }}
                >
                  {time}
                </Typography>
                <div style={{ width: "90px" }}></div>
                <img
                  src={team2Image}
                  alt={team2}
                  style={{
                    width: "50px",
                    borderRadius: "50%",
                    margin: "8px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                //   margin: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  // style={{ marginRight: "20%" }}
                >
                  {team1}
                </Typography>
                <div style={{ width: "70px" }}></div>
                <div variant="contained" style={buttonStyle}>
                  {textbnt}
                </div>
                <div style={{ width: "70px" }}></div>
                <Typography variant="h6" component="div">
                  {team2}
                </Typography>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></div>
              <Typography
                variant="p"
                component="div"
                style={{ paddingRight: "55%" }}
              >
                {deatalies1}
              </Typography>
              <Typography variant="p" component="div">
                {deatalies2}
              </Typography>
            </div>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "white",
                margin: "8px 0",
              }}
            />

            {isHovering && (
              <div className="fotterCard" id="footerCard">
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "left",
                        width: "50%",
                        alignitems: "center",
                      }}
                    >
                      <Typography variant="body2">
                        {place}
                        <SportsBasketballOutlinedIcon
                          style={{ width: "30px" }}
                        />
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="body2">
                        <StadiumOutlinedIcon />
                        {stadium}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MatchCard;

// // import style from "./styles.css"; // Import the CSS file
// import React from "react";
// import "./styles.css";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
// import StadiumOutlinedIcon from "@mui/icons-material/StadiumOutlined";

// const MatchCard = ({ match, isRedBackground }) => {
//   const {
//     time,
//     team1,
//     team2,
//     place,
//     stadium,
//     team1Image,
//     team2Image,
//     deatalies1,
//     deatalies2,
//     textbnt,
//     colorbnt,
//   } = match;

//   const cardStyle = {
//     backgroundColor: isRedBackground ? "#FFF4DC" : "#FAE5DA",
//     marginBottom: "16px",
//     width: "80%",
//     position: "relative", // Add position relative to the card container
//   };

//   const buttonStyle = {
//     backgroundColor: isRedBackground ? "#F9DEA2" : "#F6D3C0",
//     borderRadius: "50px",
//     padding: "10px",
//     width: "80px",
//     textalign: "center",
//     border: `2px solid ${colorbnt}`,
//   };

//   return (
//     <div className="section">
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Card sx={{ ...cardStyle }} className={cardStyle}>
//           <CardContent>
//             {/* Content as before */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 // margin: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <img
//                   src={team1Image}
//                   alt={team1}
//                   style={{
//                     width: "50px",
//                     borderRadius: "50%",
//                     margin: "8px",
//                   }}
//                 />
//                 <div style={{ width: "90px" }}></div>
//                 <Typography variant="h5" component="div">
//                   {time}
//                 </Typography>
//                 <div style={{ width: "90px" }}></div>
//                 <img
//                   src={team2Image}
//                   alt={team2}
//                   style={{
//                     width: "50px",
//                     borderRadius: "50%",
//                     margin: "8px",
//                   }}
//                 />
//               </div>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 //   margin: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   component="div"
//                   // style={{ marginRight: "20%" }}
//                 >
//                   {team1}
//                 </Typography>
//                 <div style={{ width: "70px" }}></div>
//                 <div variant="contained" style={buttonStyle}>
//                   {textbnt}
//                 </div>
//                 <div style={{ width: "70px" }}></div>
//                 <Typography variant="h6" component="div">
//                   {team2}
//                 </Typography>
//               </div>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginBottom: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               ></div>
//               <Typography
//                 variant="p"
//                 component="div"
//                 style={{ paddingRight: "55%" }}
//               >
//                 {deatalies1}
//               </Typography>
//               <Typography variant="p" component="div">
//                 {deatalies2}
//               </Typography>
//             </div>
//             <div
//               style={{
//                 width: "100%",
//                 height: "2px",
//                 backgroundColor: "white",
//                 margin: "8px 0",
//               }}
//             />
//             {/* Hoverable footer card */}
//             <div className="footerCard">
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 {/* Content of the footer card */}
//                 <div>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         alignItems: "center",
//                         justifyContent: "center",
//                         textAlign: "left",
//                         width: "50%",
//                         alignitems: "center",
//                       }}
//                     >
//                       <Typography variant="body2">
//                         {place}
//                         <SportsBasketballOutlinedIcon
//                           style={{ width: "30px" }}
//                         />
//                       </Typography>
//                     </div>
//                     <div>
//                       <Typography variant="body2">
//                         <StadiumOutlinedIcon />
//                         {stadium}
//                       </Typography>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default MatchCard;
