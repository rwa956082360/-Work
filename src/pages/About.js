import React from 'react';
import './styles/Pages.css'; // ใช้ CSS ร่วมกัน

function About() {
    const images = [
        {
            src: "https://www.lannapoly.ac.th/web/assets/logo_lannapoly-CnawhWXg.png",
            alt: "โลโก้โปลิเทคนิคลานนา",
            caption: "วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่",
        },
    ];

    return (
        <main className="about-page">
            {/* แกลเลอรีรูปภาพ */}
            <section className="image-gallery">
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="gallery-image"
                        />
                        <p className="image-caption">{image.caption}</p>
                    </div>
                ))}
            </section>

            {/* เนื้อหาเกี่ยวกับวิทยาลัย */}
            <section className="about-intro">
                <h1>เกี่ยวกับวิทยาลัย</h1>
                <p>
                    วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่เป็นสถานศึกษาชั้นนำในด้านเทคโนโลยี 
                    โดยมุ่งมั่นที่จะพัฒนานักศึกษาให้มีความสามารถด้านวิชาชีพและพร้อมเผชิญหน้ากับความท้าทายในยุคดิจิทัล
                </p>
            </section>

            {/* เป้าหมาย */}
            <section className="about-goals">
                <h2>เป้าหมาย</h2>
                <p>
                    วิทยาลัยมีเป้าหมายในการพัฒนาบุคลากรที่มีความเชี่ยวชาญในด้านเทคโนโลยีสารสนเทศ 
                    และสร้างสรรค์นวัตกรรมใหม่ ๆ เพื่อตอบสนองความต้องการของอุตสาหกรรมทั้งในระดับประเทศและนานาชาติ
                </p>
            </section>

            {/* วิสัยทัศน์ */}
            <section className="about-vision">
                <h2>วิสัยทัศน์</h2>
                <p>
                    "สร้างสรรค์อนาคตด้วยการศึกษา นำพาความสำเร็จผ่านเทคโนโลยี"
                </p>
            </section>

            {/* ค่านิยมหลัก */}
            <section className="about-values">
                <h2>ค่านิยมหลัก</h2>
                <ul>
                    <li>ความมุ่งมั่นสู่ความเป็นเลิศ</li>
                    <li>การพัฒนานวัตกรรมอย่างต่อเนื่อง</li>
                    <li>ความซื่อสัตย์และจริยธรรมในวิชาชีพ</li>
                    <li>การเรียนรู้ตลอดชีวิต</li>
                </ul>
            </section>
        </main>
    );
}

export default About;
