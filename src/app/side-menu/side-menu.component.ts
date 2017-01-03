import { Component, OnInit, Input } from '@angular/core';

import AnalyticsService from '../common/analytics.service';
import mstrObjectTypeIconMap from '../common/mstr-object-type-icon-map';
import {IMstrFolder, IMstrObjectTypeIconMap, IPartnerModel, IPartnerMap} from 'models';

@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.tpl/html',
  styleUrls: ['side-menu.scss']
})
/**
 * Controls the side menu
 */
export class SideMenuComponent implements OnInit {


  /**
   * Url for the app's SVG icon
   */
  private iconSrc: string;
  /**
   * The name of this app
   */
  private titleText: string;
  /**
   * Determines whether the menu is open or not
   * @type {boolean}
   */
  private menuOpen: boolean = false;

  /**
   * If a partner is selected, this value will be populated with its values
   * @type {IPartnerModel}
   */
  private selectedPartner?: IPartnerModel;

  /**
   * The available mstrFolders for the current selected partner
   */
  private mstrFolders?: Array<IMstrFolder>;

  /**
   *
   * @type {IMstrObjectTypeIconMap}
   */
  private iconMap: IMstrObjectTypeIconMap = mstrObjectTypeIconMap;

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {

  }


}
