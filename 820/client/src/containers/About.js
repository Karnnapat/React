import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About =() => {
    return (
        <div>
            <Header/>
                <div className="container col-md-5">
                    <h3>สวัสดีครับ</h3>
                    <p className="title text-just mt-4 mb-4">
                        ทดสอบ ทดสอบ
                    </p>
                    <h4 className="text-success">จาก เคยูคาเฟ่</h4>
                </div>

            <Footer company ="KU" email = ""/>
        </div>
    )
}
export default About;