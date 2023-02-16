import HornedBeast from './HornedBeast';
import data from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Main() {
    return (
        <main>
            <Container fluid="sm">
                <Row>
                    {data.map(item => {
                        return <HornedBeast
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description} />;
                    })}
                </Row>
            </Container>
        </main >
    )
}

export default Main;