import React from 'react';
import './styles/Pages.css'; // ใช้ CSS เดียวกันสำหรับทุกหน้า

function Contact() {
    return (
        <main className="main-content">
            <h1>ติดต่อเรา</h1>
            <p>มีคำถามหรือต้องการความช่วยเหลือ? อย่าลังเลที่จะติดต่อเรา!</p>

            {/* ฟอร์มติดต่อ */}
            <div className="contact-form">
                <form>
                    <label htmlFor="name">ชื่อ:</label>
                    <input type="text" id="name" name="name" placeholder="ใส่ชื่อของคุณ" required />

                    <label htmlFor="email">อีเมล:</label>
                    <input type="email" id="email" name="email" placeholder="ใส่อีเมลของคุณ" required />

                    <label htmlFor="message">ข้อความ:</label>
                    <textarea id="message" name="message" rows="4" placeholder="ป้อนข้อความของคุณ" required></textarea>

                    <button type="submit">ส่งข้อความ</button>
                </form>
            </div>

            {/* ข้อมูลการติดต่อ */}
            <section className="contact-info">
                <h2>ข้อมูลการติดต่อของเรา</h2>
                <p>Email: <a href="mailto:info@lannapolytechnic.ac.th">info@lannapolytechnic.ac.th</a></p>
                <p>Phone: <a href="tel:+6653123456">053-123456</a></p>
            </section>

            {/* แผนที่ Google Maps */}
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.728987728259!2d98.98196737529343!3d18.795298763402717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a785c30f4b7%3A0xe317aa2c19ea8055!2sLanna%20Polytechnic%20College!5e0!3m2!1sen!2sth!4v1693656543210!5m2!1sen!2sth"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>
        </main>
    );
}

export default Contact;
