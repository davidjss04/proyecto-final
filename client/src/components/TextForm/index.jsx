import { useState, useEffect } from "react";
import { Avatar, Box, IconButton, TextField } from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatQuote,
  FormatUnderlined,
  Link,
} from "@mui/icons-material";
import { Container } from "@mui/system";

export default function TextForm({ cb, value }) {
  const [localValue, setLocalValue] = useState('');
  //Estado local para enviar Comment con negritas y demas
  const [already, setAlready] = useState({
    bold: false,
    italic: false,
    underline: false,
    link: false,
    quote: false,
  });

  const imgLink = "Url de imagen de usuario"; //Imagen cuando se implemente el profile

  useEffect(() => {
    cb(localValue)
  }, [localValue, cb])

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalValue(value);
  };

  const handleBold = (e) => {
    if (already.bold === true) {
      console.log("entre");
    } else {
      setLocalValue(`<b>${localValue}</b>`);
      setAlready({ ...already, bold: true });
    }
  };
  //Handle para ITALIC
  const handleItalic = (event) => {
    if (already.italic === true) {
      console.log("entre");
    } else {
      setLocalValue(`<i>${localValue}</i>`);
      setAlready({ ...already, italic: true });
    }
  };
  //Handle para UNDERLINE
  const handleUnderline = (event) => {
    if (already.underline === true) {
      console.log("entre");
    } else {
      setLocalValue(`<u>${localValue}</u>`);
      setAlready({ ...already, underline: true });
    }
  };
  //Handle para LINK
  const handleLink = (event) => {
    if (already.link === true) {
      console.log("entre");
    } else {
      setLocalValue(`<a href="#">${localValue}`);
      setAlready({ ...already, link: true });
    }
  };
  //Handle para QUOTE
  const handleQuote = (event) => {
    if (already.quote === true) {
      console.log("entre");
    } else {
      setLocalValue(`<blockquote>${localValue}</blockquote>`);
      setAlready({ ...already, quote: true });
    }
  };

  return (
    <Container sx={{ display: "flex", gap: 2 }}>
      <Box className="formComment">
        <Avatar alt={"Profile picture"} src={imgLink} />
      </Box>
      <Box
        width={580}
        sx={{
          bgcolor: "secondary.text",
          borderColor: "primary.main",
          border: 1,
          borderRadius: 1,
          display: "inline-block",
          boxShadow:"3"
        }}
      >
        <TextField
          onChange={handleChange}
          type="form"
          id="standard-multiline-static"
          fullWidth
          name="text"
          value={value}
          multiline
          rows={4}
          placeholder="Escribe aqui..."
          variant="standard"
          InputProps={{ inputProps: { style: { color: 'black' }}}}
          sx={{color:"black",}}
        />
        <Box
          className="postActions"
          sx={{
            bgcolor: "#c0c0c0",
            borderColor: "secondary.main",
						display: 'flex',
						justifyContent: 'flex-start'
          }}
        >
            <IconButton onClick={handleBold}>
              <FormatBold className="iconitos" />
            </IconButton>
            <IconButton onClick={handleItalic}>
              <FormatItalic className="iconitos" />
            </IconButton>
            <IconButton onClick={handleUnderline}>
              <FormatUnderlined className="iconitos" />
            </IconButton>
            <IconButton onClick={handleLink}>
              <Link className="iconitos" />
            </IconButton>
            <IconButton onClick={handleQuote}>
              <FormatQuote className="iconitos" />
            </IconButton>
        </Box>
      </Box>
    </Container>
  );
}
