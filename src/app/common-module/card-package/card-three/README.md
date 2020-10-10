# Card.03-04 Card thông tin cá nhân

# Selector:

app-card-three

# Input:

    user: { // data to show in card
      intro: string, // Giới thiệu (optional : card3 sẽ có còn card4 không có)
      title: string, // Tiêu đề card (optional: card3 sẽ có còn card4 không có)
      img: string, // user avatar (optional: card3 sẽ có còn card4 không có)
      info: [ // Mảng các cột thông tin
        {
          title: string, // Tiêu đề 1 cột
          data: [ // Mảng các dòng trong 1 cột
            {
              key: string, // Tên trường dữ liệu
              value: string // Giá trị trường dữ liệu
            }
          ]
        }
      ]
    }

# Output:

N/A

# Module:

N/A

# Example:

    <app-card-three [user]="User"></app-card-three>
