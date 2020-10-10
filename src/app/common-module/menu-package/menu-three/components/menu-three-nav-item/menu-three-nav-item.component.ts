import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { MenuTreeNodeModel } from '../../menu-three.component';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-menu-three-nav-item',
  templateUrl: './menu-three-nav-item.component.html',
  styleUrls: ['./menu-three-nav-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ])
  ]
})
export class MenuThreeNavItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: MenuTreeNodeModel;
  @Input() depth: number;

  constructor(public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        if (this.item.url && event.urlAfterRedirects) {
          this.expanded =
            event.urlAfterRedirects.indexOf(`${this.item.url}`) === 1;
          this.ariaExpanded = this.expanded;
        }
      }
    });
  }

  onItemSelected(item: MenuTreeNodeModel) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.url]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
