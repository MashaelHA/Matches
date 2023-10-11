import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CustomButton = ({ text, isActive, onClick }) => {
  return (
    <Button
      variant="outlined"
      style={{
        cursor: 'pointer',
        border: '1px solid #00800040',
        borderRadius: '50px',
        padding: '0 15px',
        fontSize: '0.9rem',
        marginRight: '10px',
        color: "black",
        backgroundColor: isActive ? '#edf3dd' : 'transparent',
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

const Header = () => {
  return (
    <Box
      sx={{
        margin: '10px 0',
        display: 'flex',
        alignItems: 'center',
        paddingRight: "50px",
        paddingLeft: "50px",
        // width: 'calc(100% + 100px)',
        justifyContent: 'space-between',
      }}
    >
      <CustomButton text="Yesterday" isActive={false} onClick={() => console.log('Yesterday')} />
      <CustomButton text="Today" isActive={true} onClick={() => console.log('Today')} />
      <CustomButton text="Tomorrow" isActive={false} onClick={() => console.log('Tomorrow')} />
      <CustomButton text="Fri 02 Feb" isActive={false} onClick={() => console.log('Fri 02 Feb')} />
    </Box>
  );
};

export default Header;




// import React from 'react';
// import Button from '@mui/material/Button';
// // import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   customButton: {
//     backgroundColor: '#FF5733', // Replace with your desired background color
//     color: 'white',
//     border: '2px solid #FF5733', // Colored border
//     fontSize: '16px', // Custom font size
//     padding: '10px 20px', // Custom padding
//     '&:hover': {
//       backgroundColor: '#FF7F50', // Hover background color
//       borderColor: '#FF7F50', // Hover border color
//     },
//   },
// }));

// const CustomButton = ({ temp }) => {
//   const {
//     backgroundColor,
//     color,
//     border, // Colored border
//     fontSize,
//     padding,
//     } = temp;

//     customButton = {
        
//     };

//   return (
//     <Button className={customButton}>
//       {text}
//     </Button>
//   );
// };

// export default CustomButton;
