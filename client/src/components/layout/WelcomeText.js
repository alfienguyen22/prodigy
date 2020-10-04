import React, { Component } from "react";

class WelcomeText extends Component {
    render() {
        return (
            <div id="main">
                <div id="introBox">
                    <br />
                    <div id="introText1" className="introText">
                        <p>
                            Những bài đọc trên Prodigy được biên dịch dựa trên
                            bộ sách nổi tiếng “Daily Warm-ups Reading” của Nhà
                            Xuất Bản Teacher Created Resources, cung cấp kiến
                            thức một cách phong phú qua các chủ đề khác nhau từ
                            động vật, lịch sử, địa lý cho đến khoa học.
                        </p>
                        <br />
                    </div>

                    <div id="introText2" className="introText">
                        <p>
                            Các bài đọc được thiết kế ngắn gọn, dễ hiểu, đồng
                            thời lồng ghép những câu hỏi dựa trên quy tắc phân
                            loại của Bloom nhằm giúp các bạn nhỏ từng bước rèn
                            luyện kỹ năng đọc hiểu, mở rộng vốn từ… Đây chính là
                            tiền đề cho việc phát triển ngôn ngữ và hiểu biết
                            sâu rộng cho các em sau này.
                        </p>
                        <br />
                    </div>

                    <div id="introText3" className="introText">
                        <p>
                            Các em hãy tự tìm hiểu và khám phá Prodigy cùng với
                            bố mẹ nhé! Và hãy tự đặt ra cho mình mục tiêu mỗi
                            ngày “chinh phục" tối thiểu 1-2 bài đọc được không
                            nào?
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeText;
