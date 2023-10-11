import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import StadiumOutlinedIcon from "@mui/icons-material/StadiumOutlined";

const MatchCard = ({ match, isRedBackground }) => {
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
    margin: "20px",
    marginBottom: "16px",
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <Card sx={{ ...cardStyle, width: "400px" }} className={cardStyle}>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px",
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
              <Typography variant="h5" component="div">
                {time}
              </Typography>
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
              //   justifyContent: "center",
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
              <Typography variant="h6" component="div">
                {team1}
              </Typography>
              <div variant="contained" style={buttonStyle}>
                {textbnt}
              </div>
              <Typography variant="h6" component="div">
                {team2}
              </Typography>
            </div>


            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
            <Typography variant="p" component="div">
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2">
              Place: {place}
              <SportsBasketballOutlinedIcon />
            </Typography>
            <Typography variant="body2">
              Stadium: {stadium} <StadiumOutlinedIcon />
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchCard;
