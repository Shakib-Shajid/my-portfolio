

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 items-center my-3 md:my-5 lg:my-10">
            <div>
                <h3 className="text-8xl font-semibold mb-5 text-white">Shakib <br /> <span className="text-7l"> Al Shajid</span></h3>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus minus ratione ad id quia eius officia, impedit voluptatem quis eos debitis mollitia nihil tempora recusandae quas hic repellendus neque! Quasi eos dolor explicabo mollitia aspernatur? Asperiores numquam voluptatum quasi quia doloremque quos quidem aspernatur rem, accusamus, atque provident aliquam.</p>
            </div>
            <img src="../../public/shakib.png" alt="" />
        </div>
    );
};

export default Home;