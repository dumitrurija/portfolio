import languages from "../../data/translation";

function QuoteHome({ language }) {
    const dataText = languages[language].home.quoteSection;
    
    return <section id="quote" className="flex justify-center text-center text-xl text-white">
                <div id="container" className="flex flex-col items-end">
                    <div className="border border-white p-4 max-sm:p-2">
                        {dataText.quote}
                    </div>

                    <div className="border-l border-b border-r border-white p-4 text-right max-sm:p-2">
                        {dataText.author}
                    </div>
                </div>
            </section>
}

export default QuoteHome