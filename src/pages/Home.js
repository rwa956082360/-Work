import React, { useState } from 'react';
import './styles/Pages.css'; // ใช้ CSS เดียวกันสำหรับทุกหน้า

function Home() {
    const [selectedImage, setSelectedImage] = useState(null); // จัดการภาพที่เลือกสำหรับป๊อปอัป

    // ฟังก์ชันปิดป๊อปอัป
    const closePopup = () => setSelectedImage(null);

    return (
        <main className="main-content">
            <h1>ยินดีต้อนรับสู่แผนกไอที</h1>
            <p>สำรวจหลักสูตรและกิจกรรมของเรา</p>

            {/* รูปภาพกิจกรรม */}
            <div className="image-gallery">
                {[
                    {
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyarVgAePrY8eUl4uX5sqjHPnSDAZYLy7e0Fm11dfc9leLUKasnitMFNtz1H7XRlK3JLo&usqp=CAU",
                        alt: "Activity 1",
                        caption: "กิจกรรม 1: การเรียนการสอนเชิงปฏิบัติการ",
                    },
                    {
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQ5TUb5OC1IYlcr7q2wNPN0k1UrZHDDrIGK2YyqdIHaUYjzSNcKXQCuboHMfoFIj8DXw&usqp=CAU",
                        alt: "Activity 2",
                        caption: "กิจกรรม 2: การจัดแข่งขันด้านไอที",
                    },
                    {
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCf4F_nKcdwnCRtczk6cD0AbXM7LrqwOo5h6mY3DE9BFvik6LypSzFpgC9MfaUSqiF8Bo&usqp=CAU",
                        alt: "Activity 3",
                        caption: "กิจกรรม 3: การพัฒนาโปรแกรมและนวัตกรรม",
                    },
                ].map((image, index) => (
                    <div key={index} className="image-container">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="gallery-image"
                            onClick={() => setSelectedImage(image)} // เปิดป๊อปอัปเมื่อคลิก
                        />
                        <p className="image-caption">{image.caption}</p>
                    </div>
                ))}
            </div>

            {/* ปรัชญาของสาขา */}
            <section className="philosophy">
                <h2>ปรัชญา สาขาเทคโนโลยีสารสนเทศ</h2>
                <p>
                    "มุ่งมั่นสู่ความเป็นเลิศในด้านการศึกษาด้านเทคโนโลยีและส่งเสริมนวัตกรรมเพื่อสร้างอนาคตที่ดีกว่า."
                </p>
            </section>

            {/* ป๊อปอัปสำหรับดูภาพขนาดใหญ่ */}
            {selectedImage && (
                <div className="popup" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <p>{selectedImage.caption}</p>
                        <button className="close-popup" onClick={closePopup}>
                            ปิด
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Home;
