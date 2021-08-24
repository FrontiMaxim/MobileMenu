function MenuItem(props) {

    let classValue = props.classValue;

    return (
        <a href="#"><i className={classValue}></i></a>
    );
}

export default MenuItem;