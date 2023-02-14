import HornedBeast from './HornedBeast';
import bighorn from './bighorn.jpeg'
import rhino from './Rhino.jpeg'

function Main() {
    return (
        <main>
            <HornedBeast title="Bighorn Sheep" imageUrl={bighorn} description="The Bighorn Sheep is a horned beast that lives in the mountains." />
            <HornedBeast title="Rhino" imageUrl={rhino} description="This is a picture of a rhino in it's natural habitat." />
        </main >
    );
}

export default Main;