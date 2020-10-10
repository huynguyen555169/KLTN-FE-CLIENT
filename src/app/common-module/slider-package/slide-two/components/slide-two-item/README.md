# Slide02 Slide

# Selector:

app-slide-two-item

# Input:

    	data:SlideTwoItemModel = { // data will show in slide
    			img: string, // image of slide
    			star: number, // rating of slide
    			description: string, // description of slide
    			title: string, // title of slide
    			subtitle: string // subtitle of slide
    	}

# Output:

N/A

# Module:

{ MatIconModule } from "@angular/material/icon";

# Example:

<app-slide-two-item [data]="data"></app-slide-two-item>
