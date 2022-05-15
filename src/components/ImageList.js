import './ImageList';


const ImageList = (props) => {
    const id = null;
    const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.small}/>
    });

    return <div className="image-list" key={id}>{images}</div>

};

export default ImageList;