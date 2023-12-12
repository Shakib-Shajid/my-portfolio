import About from "./About";

const Home = () => {
    return (
        <div>
            <div className="flex gap-6 items-center">
                <div>
                    <h3 className="text-8xl font-semibold mb-3 text-white">Shakib <br /> <span className="text-7l"> Al Shajid</span></h3>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus minus ratione ad id quia eius officia, impedit voluptatem quis eos debitis mollitia nihil tempora recusandae quas hic repellendus neque! Quasi eos dolor explicabo mollitia aspernatur? Asperiores numquam voluptatum quasi quia doloremque quos quidem aspernatur rem, accusamus, atque provident aliquam.</p>
                </div>
                <img src="../../public/shakib.png" alt="" />
            </div>
            <About></About>
        </div>
    );
};

export default Home;