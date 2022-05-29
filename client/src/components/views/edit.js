import React, { Fragment, Component} from "react";
import axios from "axios"
import '../../App1.css';

class Edit extends Component {
  constructor() {
    super()
    this.state = {
      filename: "",
      serverURL: "http://localhost:5000",
      title: "",
      description: "",
      author: "",
      category: "",
      tags: [],
      price: "",
      externalImage: "false",
      externalCount: "",
      ifTip: "false", //not necessary, but am leaving it here for future funcitonality and ensuring that no 'undefined' issues occur
      datePublish: "",
    }
    // Necessary to make async onChange functions work properly. Apparently an archaic solution, but works
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeAuthor = this.onChangeAuthor.bind(this)
    this.onChangeCategory = this.onChangeCategory.bind(this)
    this.onChangeTags = this.onChangeTags.bind(this)
    this.onChangePrice = this.onChangePrice.bind(this)
    this.onChangeExternalImage = this.onChangeExternalImage.bind(this)
    this.onChangeExternalCount = this.onChangeExternalCount.bind(this)
    this.onChangeDatePublish = this.onChangeDatePublish.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async componentDidMount() {
    //Sets the filename based off of the route
    var editString = window.location.href
    editString = editString.substring(editString.indexOf("?") + 1)
    await this.setState({ filename: editString })

    //Retrieves the image metadata that is being edited
    const res = await axios.get(
      `${this.state.serverURL}/editSearch`,
      { params: { fileName: this.state.filename } },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
          "Access-Control-Allow-Headers":
            "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control",
        },
      }
    )

    this.setState({
      title: res.data["title"],
      description: res.data["description"],
      author: res.data["author"],
      category: res.data["category"],
      tags: res.data["tags"],
      price: res.data["price"],
      externalImage: res.data["externalImage"],
      externalCount: res.data["externalCount"],
      ifTip: res.data["ifTip"],
      datePublish: res.data["datePublish"],
    })
  }

  // Submits the finalized changes to backend
  async onSubmit(e) {
    e.preventDefault()

    var newEdit = {
      filename: this.state.filename,
      newFilename: this.state.newFilename,
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      category: this.state.category,
      tags: this.state.tags,
      price: this.state.price,
      externalImage: this.state.externalImage,
      externalCount: this.state.externalCount,
      ifTip: this.state.ifTip,
      datePublish: this.state.datePublish,
    }

    axios.post(`${this.state.serverURL}/submitEdit`, newEdit, {
      headers: {
        "Content-Type": "application/json",
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
        "Access-Control-Allow-Headers":
        "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control",
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Redigering är sparad!")
  }

  // Sets this.state variables to whatever is handled by input
  // There probably is a way to combine the following onChange functions, I am not putting down any time on figuring it out right now
  async onChangeTitle(e) {
    e.preventDefault()

    await this.setState({ title: document.getElementById("title").value })
  }

  async onChangeDescription(e) {
    e.preventDefault()

    await this.setState({
      description: document.getElementById("description").value,
    })
  }

  async onChangeAuthor(e) {
    e.preventDefault()

    await this.setState({ author: document.getElementById("author").value })
  }

  async onChangeCategory(e) {
    e.preventDefault()

    await this.setState({ category: document.getElementById("category").value })
  }

  async onChangeTags(e) {
    e.preventDefault()

    var tagsBeforeSplit = document.getElementById("tags").value
    await this.setState({ tags: tagsBeforeSplit.split(",") })
  }

  async onChangePrice(e) {
    e.preventDefault()

    await this.setState({ price: document.getElementById("price").value })
  }

  async onChangeExternalImage(e) {
    e.preventDefault()

    await this.setState({
      externalImage: document.getElementById("title").checked,
    })
  }

  async onChangeExternalCount(e) {
    e.preventDefault()

    await this.setState({
      externalCount: document.getElementById("externalCount").value,
    })
  }

  async onChangeDatePublish(e) {
    e.preventDefault()

    await this.setState({
      datePublish: document.getElementById("datePublish").value,
    })
    console.log(this.state.datePublish)
  }

  render() {
    return (
      <Fragment>
        <label htmlFor="image"> Filnamn: {this.state.filename} </label>
        <img
          id="image"
          style={{ width: "100%" }}
          src={`${this.state.serverURL}/image/${this.state.filename}`}
          alt=""
        />
        <form onSubmit={this.onSubmit}>
          <div>
            <div>
              <label htmlFor="title"> Titel: </label>
            </div>
            <input
              type="text"
              id="title"
              defaultValue={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div>
            <div>
              <label htmlFor="description"> Beskrivning: </label>
            </div>
            <input
              type="text"
              id="description"
              defaultValue={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div>
            <div>
              <label htmlFor="author"> Fotograf: </label>
            </div>
            <input
              type="text"
              id="author"
              defaultValue={this.state.author}
              onChange={this.onChangeTitle}
            />
          </div>
          <div>
            <div>
              <label htmlFor="category"> Kategori: </label>
            </div>
            <select id="category" onChange={this.onChangeCategory}>
              <option value={this.state.category}>{this.state.category}</option>
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
            <div>
              <label htmlFor="tags">Taggar/Sökord, separerad med komma:</label>
            </div>
            <input
              type="text"
              id="tags"
              defaultValue={this.state.tags}
              onChange={this.onChangeTags}
            />
          </div>
          <div>
            <div>
              <label htmlFor="price"> Pris: </label>
            </div>
            <input
              type="number"
              id="price"
              defaultValue={this.state.price}
              onChange={this.onChangePrice}
            />
          </div>
          <div>
            <div>
              <label htmlFor="datePublish"> När är bilden publicerad? </label>
            </div>
            <input
              type="date"
              id="datePublish"
              defaultValue={this.state.datePublish}
              onChange={this.onChangeDatePublish}
            />
          </div>
          <div>
            <div>
              <label htmlFor="externalImage"> Är bilden extern? </label>
            </div>
            <input
              type="checkbox"
              id="externalImage"
              name="yes"
              onChange={this.onChangeExternalImage}
            />
          </div>

          <div>
            <div>
              <label htmlFor="externalCount">
                Hur många gånger får bilden laddas ned:
              </label>
            </div>
            <input
              type="number"
              id="externalCount"
              defaultValue={this.state.externalCount}
              onChange={this.onChangeExternalCount}
            />
          </div>

          <input
            type="submit"
            value="Spara redigering"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
      </Fragment>
    )
  }
}

export default Edit

/*
function Edit() {
  const [filename, setFilename] = setState(" ")

  var serverURL = "localhost:5000/image/"

  var fileURL = `${serverURL}${filename}`

  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <h3 className="text-center">{filename}</h3>
        <img style={{ width: "100%" }} src={fileURL} alt="" />
      </div>

      <form onSubmit={onSubmit}>
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
          <input type="date" id="datePublish" placeholder="Publiceringsdatum" />
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
    </div>
  )
}
export default Edit
*/