# Foot.01 Footer

# Selector:

app-footer-one

# Input:

    // data will show in footer
    data: FooterOneModel = {
      title: String, // title of Footer
      content: [{ // data of some columns
        icon: string, // img of column
        title: string, // title of colum
        description:string, // description of column
        more: string, // link to website (or page)
      }],
      phone: [{ // phone of website
        icon: string, // img of phone
        number: string, // number of phone
      }],
      titleSocial: string, // title of Socials
      social: [{ // list social of socials
        icon:string, // img of social
        link:string, // link to social types
      }],
      copyright: string, // copyright of footer
      moreInfo: string, // more info of footer
    };

# Output:

N/A

# Module:

{ MatButtonModule } from "@angular/material/button";

# Note:

Min height: Recommend: 400px

# Example:

<app-footer-one [data]="data"></app-footer-one>
