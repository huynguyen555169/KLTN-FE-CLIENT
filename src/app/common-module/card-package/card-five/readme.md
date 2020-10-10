# Card.05 Card slider

# Selector:

app-card-five

# Input:

    slideList: CardSlideListModel[] = [{ // data to show in card
      description: 'string', // Thông tin 1 slider
      percent: number, // % slider
    }]

    type: string // Loại slider, hiển thị như tên card

# Output:

N/A

# Module:

N/A

# Example:

<app-card-five [slideList]="cardSlideList" [type]="type"></app-card-five>
