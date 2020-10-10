# Card.06 Card teacher

# Selector:

<app-card-six></app-card-six>

# Input:

    cardData =
      {
        avatar: "https://i.pinimg.com/originals/a7/1f/75/a71f757f6ac38c78fe0753a0143d4fa8.gif",
        fullName: 'Phạm Thị Khánh Linh',
        sumary: "Tốt nghiệp đại học RMIT",
        point: 5.0,
        totalPoint: "1,608",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        skills: [
          {
            name: "IELTS > 8.0 Senior"
          },
          {
            name: "Speaking skills"
          },
          {
            name: "Reading skills"
          }
        ]
      }

# Output:

    actionClick: item // button when click card

# Module:

import { MatIconModule } from '@angular/material/icon';  
import { MatChipsModule } from '@angular/material/chips';

# Example:

<app-card-six [cardData]="data" (actionClick)="handleActionClick()"></app-card-six>
