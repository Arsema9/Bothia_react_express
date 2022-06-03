import React, { Fragment, useState } from "react";
import axios from "axios";
import '../../App1.css';
import {
  Stack,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";


//import * as ReactDOM from 'react-dom/client'
//import { NotificationContainer, NotificationManager } from "react-notifications"

const Upload = () => {
  const [file, setFile] = useState("")
  const [filename, setFilename] = useState("")
  const [uploadedFile, setUploadedFile] = useState({})
  const [divcontainer, setDivcontainer] = useState(false)
  //const [divcontainer2, setDivcontainer2] = useState(false) //broken
  const [exifdata, setExifdata] = useState({})

  const serverURL = "localhost:5000" //localhost for use without external address


  //Displays currently sellected file
  const onChange = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

 
  // Uploads image to tmp, for exif extraction
  const onSubmit = async (e) => {
    e.preventDefault()

    setDivcontainer(!divcontainer)

    const formData = new FormData()
    formData.append("file", file)

    const res = await axios.post(`${serverURL}/tmp`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    const { fileName, filePath } = res.data

    console.log(fileName)

    setUploadedFile({ fileName, filePath })
  }

  // Delay function for ease of debugging and desync issues
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  // Primary
  const onUpload = async (e) => {
    e.preventDefault()

    var title = document.getElementById("title").value
    var description = document.getElementById("description").value
    var author = document.getElementById("author").value
    var category = document.getElementById("category").value
    var tagsBeforeSplit = document.getElementById("tags").value
    var tags = tagsBeforeSplit.split(" ")
    var price = document.getElementById("price").value
    var externalImage = document.getElementById("externalImage").checked
    var externalCount = document.getElementById("externalCount").value
    var ifTip = false //not handled on this page
    var datePublish = document.getElementById("datePublish").value

    var finalMeta = {
      filename: filename,
      title: title,
      description: description,
      author: author,
      category: category,
      tags: tags,
      price: price,
      externalImage: externalImage,
      externalCount: externalCount,
      ifTip: ifTip,
      datePublish: datePublish,
    }

    // Manages manual metadata

    axios.post(`${serverURL}/meta`, finalMeta, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    await delay(1000)

    const formData = new FormData()
    formData.append("file", file)

    // Primary upload method and cleanup from tmp

    await axios.post(`${serverURL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    await delay(1000)

    alert("Bilden har laddats upp!")
  }
  let easing = [0.6, -0.05, 0.01, 0.99];

  const animate = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.16,
    },
  };
  const x = divcontainer

  const abc = React.useRef(null)
  const handleClick = event =>{
    abc.current.click()
  }

  return (
    <Fragment>
      <Stack spacing={3}>
            <form onSubmit={onSubmit}>
        

              {!x && (
            
                    <div className="custom-file mb-4">
            
                    <Stack
                      component={motion.div}
                      initial={{ opacity: 0, y: 60 }}
                      animate={animate}
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                    >     
               
                  <Button onClick={handleClick}
                    fullWidth
                    size="large"
                    variant="contained"
                  >
                    <input ref={abc}
                      style={{display:"none"}}
                      type="file"
                 
                      id="customFile"
                    
                  onChange={onChange}
                    />VÄLJ FIL
                    </Button>
                    <div>
                  <InputLabel className="custom-file-label"
                    fullWidth
                    size="large"
                    variant="contained"
                  >

                  {filename}
                  </InputLabel>
                  </div>
              </Stack>
                   
                    </div>
                     
  
        )}
        {!x && (
                
            <InputLabel className="custom-file-label"
              fullWidth
              size="large"
        
            >
              <input 
                
                type="submit"
                id="customFile"
                />
              LADDA UPP FIL
            </InputLabel>
     
        )}
             
        {uploadedFile ? (
                      <Stack component={motion.div}
                        initial={{ opacity: 0, y: 60 }}
                        animate={animate}
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                    >
              <div className="row mt-5">
                <div className="col-md-6 m-auto">
              <h3 className="text-center">{uploadedFile.fileName}</h3>
             
              <img
                      style={{ width: "100%" }}
                //src={uploadedFile.filePath}
                src= "/images/img-1.jpg"
                alt=""
              />
                  </div>
                </div>
          
                  </Stack>
                    
                
        ) : null}
       
   
      </form>
    </Stack>
        

      {x && (
       
               
        <form onSubmit={onUpload}>
         
          <Stack spacing={3}>
                  
                    <Stack
                      component={motion.div}
                      initial={{ opacity: 0, y: 60 }}
                      animate={animate}
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                    >

              <img
                style={{ width: "100%" }}
                src={uploadedFile.filePath}
                alt=""
              />
                      <TextField
                        fullWidth
                        label="Titel"
                        id="title"
                        
                      />

                      <TextField
                        fullWidth
                        label="Beskrivning"
                        htmlFor="description"
                        id="description"
                       
                      />
                    </Stack>
                    <Stack
                      component={motion.div}
                      initial={{ opacity: 0, y: 60 }}
                      animate={animate}
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                    >
                      <TextField
                        fullWidth
                        label="Fotograf"
                        htmlFor="author"
                        id="author"
                       
                      />
                      <InputLabel id="category" htmlFor="category">Kategori</InputLabel>

                      <Select labelId="category" id="category" value="kategori" fullWidth>
                        <MenuItem value="Inrikes"> Inrikes</MenuItem>
                        <MenuItem value="Utrikes"> Utrikes</MenuItem>
                        <MenuItem value="Nöje"> Nöje </MenuItem>
                        <MenuItem value="Sport"> Sport</MenuItem>
                        <MenuItem value="Kultur"> Kultur</MenuItem>
                      <MenuItem value="Natur"> Natur</MenuItem>

                        <MenuItem value="Ekonomi"> Ekonomi</MenuItem>
                      </Select>

                    </Stack>

                    <Stack component={motion.div}
                      initial={{ opacity: 0, y: 60 }}
                      animate={animate}
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                    >

                      <TextField
                        fullWidth
                        label="Taggar eller sökord, separera med komma-tecken"
                        htmlFor="tags"
                        id="tags"

                      />

                      <TextField
                        fullWidth
                        label="Pris"
                        type="number"
                        htmlFor="price"
                        id="price"

                      />
                      </Stack>
                    <Stack component={motion.div}
                      initial={{ opacity: 0, y: 60 }}
                      animate={animate}
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                    >
                      <TextField
                        fullWidth
                        htmlFor="datePublish"
                        type="date"
                        id="datePublish"
                      />

                      <FormControlLabel control={
                        <Checkbox color="success"
                          id="externalImage"
                          name="yes"
                        />} label="Är bilden extern?"
                      />


                      <TextField
                        fullWidth
                        label="Antal tillåtna nedladdningar"
                        htmlFor="externalCount"
                        id="externalCount"
                      />
                    </Stack>
                 
                  <Box>

                    <Button
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"


                    >
                      Final submit
                    </Button>
                  </Box>  
          </Stack>

     
        </form>
              
     
      )}
   {/*   {x && (
          
                <Stack component={motion.div}
                  initial={{ opacity: 0, y: 60 }}
                  animate={animate}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                >
               
                  Automatisk metadata
                  <pre>{JSON.stringify(exifdata, null, 2)}</pre>
          </Stack>
                  
     
      )}
   */}
         
    </Fragment>
  )
}

export default Upload