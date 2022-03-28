import { Component, AfterContentInit, ContentChildren, QueryList, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  constructor() { }

  ngAfterContentInit(): void {
    // Loops through tabs filtering and creating an array of active tabs.
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )
    // If activeTab is empty set tabs manually.
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tab: TabComponent) {
    // Sets all tabs to not active to avoid multiple active tabs
    // allowing only 1 tab to be active
    this.tabs?.forEach(tab => {
      tab.active = false;
    })
    // Passed in tab will be active
    tab.active = true;
  }
}
