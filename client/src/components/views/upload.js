import React, { Fragment, useState } from "react";
import axios from "axios";
//import * as ReactDOM from 'react-dom/client'
//import { NotificationContainer, NotificationManager } from "react-notifications"

const Upload = () => {
  const [file, setFile] = useState("")
  const [filename, setFilename] = useState("Choose File")
  const [uploadedFile, setUploadedFile] = useState({})
  const [divcontainer, setDivcontainer] = useState(false)
  const [divcontainer2, setDivcontainer2] = useState(false) //broken
  const [exifdata, setExifdata] = useState({})

  const serverURL = "localhost:5000" //localhost for use without external address

  // For manual metadata, ideal solution but making it functional is not a priority
  /*
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [author, setAuthor] = useState("")
  const [tags, setTags] = useState("")
  const [price, setPrice] = useState("")
  const [externalImage, setExternalImage] = useState(false)
  const [externalCount, setExternalCount] = useState("")
  const [ifTip, setIfTip] = useState(false)
  const [datePublish, setDatePublish] = useState("")
  */

  //Displays currently sellected file
  const onChange = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  //disabled as it's broken
  function externalVisibility(e) {
    setDivcontainer2(!divcontainer2)
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

    const { fileName, filePath, exifdata } = res.data

    setExifdata(exifdata)

    //console.log(exifdata)

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

  const x = divcontainer

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        {!x && (
          <div className="custom-file mb-4">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>
        )}
        {!x && (
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        )}
        {uploadedFile ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <h3 className="text-center">{uploadedFile.fileName}</h3>
              <img
                style={{ width: "100%" }}
                src={uploadedFile.filePath}
                alt=""
              />
            </div>
          </div>
        ) : null}
      </form>

      {x && (
        <form onSubmit={onUpload}>
          <div>
            <input type="text" id="title" placeholder="Titel" />
          </div>
          <div>
            <input type="text" id="description" placeholder="Beskrivning" />
          </div>
          <div>
            <input type="text" id="author" placeholder="Fotograf" />
          </div>
          <div>
            <select id="category">
              <option value=""> Kategori </option>
              <option value="Inrikes"> Inrikes </option>
              <option value="Utrikes"> Utrikes </option>
              <option value="Nöje"> Nöje </option>
              <option value="Sport"> Sport </option>
              <option value="Kultur"> Kultur </option>
              <option value="Natur"> Natur </option>
              <option value="Ekonomi"> Ekonomi </option>
            </select>
          </div>
          <div>
            <input
              type="text"
              id="tags"
              placeholder="Taggar/sökord, separera med space"
            />
          </div>
          <div>
            <input type="number" id="price" placeholder="Pris" />
          </div>
          <div>
            <input
              type="date"
              id="datePublish"
              placeholder="Publiceringsdatum"
            />
          </div>
          <div>
            <label htmlFor="externalImage"> Är bilden extern? </label>
            <input type="checkbox" id="externalImage" name="yes" />
          </div>

          <div>
            <input
              type="number"
              id="externalCount"
              placeholder="Antal gånger bilden får laddas ned"
            />
          </div>

          <input
            type="submit"
            value="Final submit"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
      )}

      {x && (
        <div>
          Automatisk metadata
          <pre>{JSON.stringify(exifdata, null, 2)}</pre>
        </div>
      )}
    </Fragment>
  )
}

export default Upload