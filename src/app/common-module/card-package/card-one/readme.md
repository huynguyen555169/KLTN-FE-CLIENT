# Card.01 Card dọc

# Selector:

app-card-one

# Input:

    	cardData: CardOneModel = { // data will show in card
    		img: string, // background of card
    		discount: string, // percent of discount
    		title: string, // title of card
    		chips: ["Chips", "Chips", "Chips", "+8"], // tối đa 3 chips sẽ hiện, chip thứ 4 sẽ là +N (N: số còn lại)
    		subTitle: string, // subTitle of card
    		star: number, // number of stars in card
    		total: number, // amount of reviewer for card (star)
    		description: string // description of card
    		subContent: string, // price of currently
    		subReContent: string, // price before discount
    		isFavorite: boolean, // to show heart/full heart
    		more: string, // name of action
    	}

# Output:

    	actionClick: CardOneModel // trả ra cardData
    	heartClick: boolean // trigger when user click heart

# Module:

{ MatIconModule } from "@angular/material/icon";
{ MatButtonModule } from "@angular/material/button";

# Note

```sh
min-height container layout recommended: 490px
```

# Example:

    <app-card-one
    	[cardData]="cardData"
    	(actionClick)="actionClick($event)"
    	(heartClick)="heartClick($event)"
    ></app-card-one>
