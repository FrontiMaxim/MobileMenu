function MenuItem(props) {

    let classValue = props.classValue;

    return (
        <a href="#"><i class={classValue}></i></a>
    );
}

export default MenuItem;