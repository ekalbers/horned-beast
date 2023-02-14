import HornedBeast from './HornedBeast';
import data from '../data.json'

function Main() {

    return (
        <main>
            {data.map(item => <HornedBeast title={item.title} imageUrl={item.image_url} description={item.description} />)}
        </main >
    )
}

export default Main;