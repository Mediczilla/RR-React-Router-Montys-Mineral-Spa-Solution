import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
    // <div>
    //    <div className="packages">
    //        <div className="packagesHeader">
    //            <h1>Our Packages</h1>
    //        </div>
    //            <ul>
    //                {displayPackages}
    //            </ul>
    //        </div>
    //    </div>
<Container>
    <Card>
        <Card.Title>Our Packages</Card.Title>
        <Card.Text></Card.Text>
        <ListGroup>
            {displayPackages}
        </ListGroup>
    </Card>
</Container>

    )
}