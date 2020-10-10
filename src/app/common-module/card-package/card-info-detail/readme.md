# Card Info Detail

# Selector:

app-card-info-detail

# Input:

    data: {
      imageUrl: 'string', // Link image của card
      title: 'string', // Title của card
      infos: [{ // Thong tin detail
        title: string; // Ten thong tin detail
        content: string; // Noi dung thong tin detail
      }]
    }

# Output:

N/A

# Module:

N/A

# Example:

    <app-card-info-detail [data]="cardInfoDetail"></app-card-info-detail>
