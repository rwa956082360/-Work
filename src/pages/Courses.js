import React, { useState } from 'react';
import './styles/Pages.css'; // ใช้ CSS จากไฟล์ที่ให้มา

const courses = [
    {
        title: "ปวช.  สาขาเทคโนโลยีสารสนเทศ",
        description: "พัฒนาความรู้ด้านการใช้คอมพิวเตอร์และซอฟต์แวร์ธุรกิจ",
        image: "https://www.lannapoly.ac.th/web/assets/img-ac-Mi4t12n2.jpeg",
        details: "เน้นการเรียนการสอนที่ผสมผสานการใช้งานซอฟต์แวร์ทางธุรกิจ และการวิเคราะห์ข้อมูล",
    },
    {
        title: "ปวส. สาขาเทคโนโลยีสารสนเทศ",
        description: "เน้นการพัฒนาโปรแกรมและการจัดการเครือข่าย",
        image: "https://www.lannapoly.ac.th/web/assets/img-el-ceQCnwwm.jpeg",
        details: "เน้นการพัฒนาทักษะการเขียนโปรแกรม การสร้างระบบเครือข่าย และการประยุกต์ใช้เทคโนโลยี",
    },
    {
        title: "ปวช. สมัครวันนี้ลดทันที 30%",
        description: "มีทุนการศึกษาเรียนฟรี",
        image: "https://www.lannapoly.ac.th/web/assets/img-mk-COKuSQbq.jpeg",
        details: "โปรโมชั่นพิเศษ! ลดค่าเล่าเรียน 30% สำหรับนักศึกษาที่สมัครภายในเดือนนี้",
    },
    {
        title: "ปวส. สมัครวันนี้ลดทันที 30%",
        description: "สมัครรอบโควต้าคุ้มกว่าแน่นอน",
        image: "https://www.lannapoly.ac.th/web/assets/img-hm-CAxXBMcB.jpeg",
        details: "สมัครเรียนรอบโควต้าวันนี้ พร้อมรับทุนการศึกษาพิเศษ!",
    },
];

function Courses() {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const openModal = (course) => {
        setSelectedCourse(course);
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };

    return (
        <main className="main-content">
            <h1>หลักสูตรที่เปิดสอน</h1>
            <p>เราเปิดสอนหลากหลายหลักสูตรเพื่อเตรียมความพร้อมให้คุณก้าวทันเทคโนโลยีในยุคปัจจุบัน</p>
            <div className="course-list">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img
                            src={course.image}
                            alt={course.title}
                            className="course-image"
                            onClick={() => openModal(course)}
                        />
                        <h2 className="course-title">{course.title}</h2>
                        <p className="course-description">{course.description}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedCourse && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <h2>{selectedCourse.title}</h2>
                        <p>{selectedCourse.details}</p>
                        <img
                            src={selectedCourse.image}
                            alt={selectedCourse.title}
                            className="modal-image"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}

export default Courses;