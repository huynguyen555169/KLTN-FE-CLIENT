# Card.10 Card

# Selector:

app-card-ten

# Input:

cardData:CardTenModel = { // data will show in card
img: string; // avatar of card
title: string; // title of card
description: string; // description of card
}
direaction: string (default = 'left') // định nghĩa hướng của animation, nhận 1 trong 3 giá trị: left, right, bottom

# Output:

# Module:

# Example:

    <app-card-ten
      [cardData]="cardData"
      [direction]="direction"
    ></app-card-ten>
