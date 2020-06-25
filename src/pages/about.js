import React from "react"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <section id="about">
            <h2>About Hoist</h2>
            <div className="column">
                <p><img src="/images/bendechrai_square_200.jpg" alt="Ben Dechrai" />My name is Ben Dechrai, and I travel a lot. Per year, my flying contributes an estimated 50 tonnes of CO2 to the environment, and until now, I’ve been offsetting that with tree planting.</p>
                <p>It turns out, though, that <strong>tree planting isn’t the most sustainable way</strong> to address the issue. A tree can only sequester so much CO2, whereas <strong>programs to reduce CO2 generation have a longer-term success rate</strong>.</p>
                <p>Truth is, it’s taken me <strong>quite a bit of research</strong> to work out what to invest my money in, and I’ve spoken to <strong>others who are similarly overwhelmed</strong>.</p>
            </div>
            <div className="column">
                <p>For them, this has resulted in either an <strong>uneasy feeling</strong> about how they’re offsetting or, worse, <strong>inaction due to a lack of time</strong> to work out where to invest their money.</p>
                <p>If you're like me, you'll want to <strong>diversify, to help a range of programs</strong>, but with a minimum cost per program it's just not possible for one person to do this.</p>
                <p>So, Hoist was born, through which we can <strong>aggregate all our contributions</strong>. We can invest them in the <strong>best programs</strong> we can find, that provide the <strong>most sustainable impact</strong> on our climate, and support organisations in <strong>various regions around the world</strong>.</p>
            </div>
        </section>
    </Layout>
)