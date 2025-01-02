import React, { useState } from 'react';
import './styles/Pages.css'; // ใช้ CSS จากไฟล์ที่ให้มา

const courses = [
    {
        title: "ปวช. สาขาเทคโนโลยีสารสนเทศ",
        description: "พัฒนาความรู้ด้านการใช้คอมพิวเตอร์และซอฟต์แวร์ธุรกิจ",
        image: "https://www.lannapoly.ac.th/web/assets/img-ac-Mi4t12n2.jpeg",
        pdf: "https://drive.google.com/file/d/1UlE2hEZWc1tMn-AN0LcGwfNS7x7dEbn8/preview",
    },
    {
        title: "ปวส. สาขาเทคโนโลยีสารสนเทศ",
        description: "เน้นการพัฒนาโปรแกรมและการจัดการเครือข่าย",
        image: "https://www.lannapoly.ac.th/web/assets/img-el-ceQCnwwm.jpeg",
        pdf: "https://drive.google.com/file/d/1UuUOdHT2aX2XUhiCFpCGpjvydLzVQB9P/preview",
    },
    {
        title: "ปวช. สมัครวันนี้ลดทันที 30%",
        description: "มีทุนการศึกษาเรียนฟรี",
        image: "https://www.lannapoly.ac.th/web/assets/img-mk-COKuSQbq.jpeg",
        pdf: "https://drive.google.com/file/d/1pOifBhqIIN7W2xOIYT9w29ZmZAnfj0v2/preview",
    },
    {
        title: "ปวส. สมัครวันนี้ลดทันที 30%",
        description: "สมัครรอบโควต้าคุ้มกว่าแน่นอน",
        image: "https://www.lannapoly.ac.th/web/assets/img-hm-CAxXBMcB.jpeg",
        pdf: "https://drive.google.com/file/d/1mCX9g5PJp5VyHLf9MvpyxQLg7KQGhAxS/preview",
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
                        <iframe
                            src={selectedCourse.pdf}
                            width="100%"
                            height="900px"
                            title="PDF Viewer"
                            style={{ border: "none", borderRadius: "10px" }}
                        ></iframe>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Courses;
