import React, { useState, useEffect } from "react";
import { ArrowLeft } from "../ArrowLeft/ArrowLeft";
import { Cdma } from "../Cdma/Cdma";
import { CellTower } from "../CellTower/CellTower";
import { ChevronDown } from "../ChevronDown/ChevronDown";
import { ChevronDown1 } from "../ChevronDown1/ChevronDown1";
import { ChevronLeft } from "../ChevronLeft/ChevronLeft";
import { Device } from "../Device/Device";
import { DotsVertical } from "../DotsVertical/DotsVertical";
import { Expand05 } from "../Expand05/Expand05";
import { Globe } from "../Globe/Globe";
import { IconComponentNode } from "../IconComponentNode/IconComponentNode";
import { InfoCircle } from "../InfoCircle/InfoCircle";
import { InternetDevices } from "../InternetDevices/InternetDevices";
import { LayersThree } from "../LayersThree/LayersThree";
import { Line } from "../Line/Line";
import { Map } from "../Map/Map";
import { MedCell } from "../MedCell/MedCell";
import { Menu } from "../Menu/Menu";
import { Menu1 } from "../Menu1/Menu1";
import { Minus } from "../Minus/Minus";
import { NewTab } from "../NewTab/NewTab";
import { Pin } from "../Pin/Pin";
import { Plus } from "../Plus/Plus";
import { Product } from "../Product/Product";
import { Search } from "../Search/Search";
import { Site } from "../Site/Site";
import { SiteTypes } from "../SiteTypes/SiteTypes";
import { SiteTypes1 } from "../SiteTypes1/SiteTypes1";
import { SiteTypes2 } from "../SiteTypes2/SiteTypes2";
import { Sliders02 } from "../Sliders02/Sliders02";
import { Topology } from "../Topology/Topology";
import { Union } from "../Union/Union";
import { Vector769 } from "../Vector769/Vector769";
import { Vector770 } from "../Vector770/Vector770";
import { VerizonLogo100PercentWidth } from "../VerizonLogo100PercentWidth/VerizonLogo100PercentWidth";
import { XClose } from "../XClose/XClose";
import ellipse2 from "./ellipse-2.png";
import "./style.css";
import "./responsive.css";

export default function MenuAltPanel ()  {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Add meta tag for responsive design
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.getElementsByTagName('head')[0].appendChild(meta);

    return () => {
      document.getElementsByTagName('head')[0].removeChild(meta);
    };
  }, []);

  return (
    <div className="menu-alt-panel">
      {/* Sidebar toggle button for mobile */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <Menu className="icon-instance-node" />
      </div>

      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="main-screen">
            <div className="cus-top-map">
              <div className="site-types">
                <div className="macro" />
              </div>
            </div>
          </div>

          <div className={`general-SITE-DETAILS ${sidebarOpen ? 'active' : ''}`}>
            <div className="frame">
              <div className="div">
                <div className="menu-wrapper" onClick={toggleSidebar}>
                  <Menu className="icon-instance-node" />
                </div>

                <div className="main-search-wrapper">
                  <div className="main-search">
                    <div className="search-bar">
                      <div className="search-bar-2">
                        <ArrowLeft className="icon-instance-node-2" />
                        <div className="element">MADELINE</div>

                        <div className="frame-2">
                          <XClose className="icon-instance-node-2" />
                          <Sliders02 className="icon-instance-node-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-3">
                <div className="frame-4">
                  <div className="header-info-side">
                    <div className="ID">
                      <div className="frame-wrapper">
                        <div className="frame-5">
                          <CellTower className="icon-instance-node" />
                          <div className="frame-6">
                            <div className="text-wrapper">MADELINE</div>

                            <div className="text-wrapper-2">
                              MACRO CELL SITE: 499246
                            </div>
                          </div>
                        </div>
                      </div>

                      <Pin className="icon-instance-node-2" />
                      <NewTab className="icon-instance-node-2" />
                    </div>

                    <div className="id-type">
                      <div className="frame-7">
                        <div className="group-wrapper">
                          <div className="group">
                            <div className="overlap-group">
                              <div className="experience-score">
                                <div className="frame-8">
                                  <div className="frame-9">
                                    <div className="text-wrapper-3">
                                      Address
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="div-wrapper">
                                <div className="frame-8">
                                  <div className="frame-9">
                                    <p className="text-wrapper-4">
                                      860 Elysian Park, LA, CA
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="frame-10">
                          <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                              <div className="experience-score-2">
                                <div className="frame-8">
                                  <div className="frame-9">
                                    <div className="text-wrapper-3">
                                      CLLI Code
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="experience-score-3">
                                <div className="frame-8">
                                  <div className="frame-9">
                                    <div className="text-wrapper-4">
                                      TLJHGYT875T
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="group-2">
                            <div className="overlap-group">
                              <div className="experience-score-4">
                                <div className="frame-8">
                                  <div className="frame-9">
                                    <div className="text-wrapper-3">
                                      Bandwidth
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="experience-score-5">
                                <div className="frame-8">
                                  <div className="frame-9">
                                    <div className="text-wrapper-4">VLAN</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="actions">
                    <div className="frame-11">
                      <div className="frame-12">
                        <div className="actions-wrapper">
                          <div className="actions-2">
                            <Topology className="icon-instance-node" />
                            <div className="text-wrapper-5">Topology</div>
                          </div>
                        </div>

                        <div className="actions-wrapper">
                          <div className="actions-2">
                            <div className="connected-devices">
                              <Device className="icon-instance-node-3" />
                            </div>

                            <div className="text-wrapper-6">
                              Connected Devices
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="frame-13">
                  <div className="site-site-KPI">
                    <div className="general-accordian">
                      <div className="frame-14">
                        <div className="equipment-h">KPI</div>

                        <ChevronDown className="icon-instance-node-2" />
                      </div>
                    </div>

                    <div className="frame-15">
                      <div className="div-2">
                        <div className="title-summary">
                          <div className="text-wrapper-7">
                            Data Quality Index
                          </div>

                          <div className="text-wrapper-8">
                            Good (75% to 90%)
                          </div>
                        </div>

                        <div className="general-DQI">
                          <div className="frame-16">
                            <div className="rectangle" />

                            <div className="rectangle-2" />
                          </div>

                          <div className="frame-17">
                            <div className="text-wrapper-9">80%</div>

                            <div className="text-wrapper-10">Good</div>
                          </div>
                        </div>
                      </div>

                      <div className="div-2">
                        <div className="title-summary">
                          <div className="text-wrapper-7">Utilization</div>

                          <div className="text-wrapper-8">
                            Moderate (25% to 50%)
                          </div>
                        </div>

                        <div className="progress-circle">
                          <div className="overlap-group-2">
                            <div className="ring">
                              <Line className="line-instance" />
                            </div>

                            <div className="number">34%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="equipment-equipment">
                    <div className="general-accordian">
                      <div className="frame-14">
                        <div className="equipment-h">Equipment(6)</div>

                        <ChevronDown className="icon-instance-node-2" />
                      </div>
                    </div>

                    <div className="search-bar-wrapper">
                      <div className="search-bar-3">
                        <div className="search-bar-4">
                          <Search className="icon-instance-node-2" />
                          <div className="search-here">Search Equipment</div>
                        </div>

                        <div className="selector">
                          <div className="search-all">Status All</div>

                          <IconComponentNode className="icon-instance-node-2" />
                        </div>
                      </div>
                    </div>

                    <div className="frame-18">
                      <div className="frame-19">
                        <div className="equipment">
                          <div className="indicator">
                            <InternetDevices className="icon-instance-node-3" />
                          </div>

                          <div className="label">
                            <div className="equipment-ID">ENODEB</div>

                            <div className="type">
                              384002 E20TH BROADWAY AWS
                            </div>

                            <div className="equipment-status">
                              <div className="text-wrapper-11">Live</div>
                            </div>
                          </div>

                          <div className="general-small-DQI">
                            <div className="frame-20">
                              <div className="rectangle-3" />

                              <div className="rectangle-4" />
                            </div>

                            <div className="frame-17">
                              <div className="text-wrapper-9">80%</div>
                            </div>
                          </div>

                          <DotsVertical className="icon-instance-node-2" />
                        </div>

                        <div className="equipment">
                          <div className="indicator">
                            <div className="icon-instance-node-3">
                              <div className="group-3">
                                <div className="overlap-group-3">
                                  <div className="rectangle-5" />

                                  <div className="rectangle-6" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="label">
                            <div className="equipment-ID">RADIO FRAME</div>

                            <div className="type">
                              NY_MINI NO2_002 ASSEMBIAGE
                            </div>

                            <div className="equipment-status">
                              <div className="text-wrapper-11">Live</div>
                            </div>
                          </div>

                          <div className="general-small-DQI">
                            <div className="frame-20">
                              <div className="rectangle-3" />

                              <div className="rectangle-4" />
                            </div>

                            <div className="frame-17">
                              <div className="text-wrapper-9">80%</div>
                            </div>
                          </div>

                          <DotsVertical className="icon-instance-node-2" />
                        </div>

                        <div className="equipment">
                          <div className="indicator">
                            <div className="icon-instance-node-3">
                              <div className="group-3">
                                <div className="overlap-group-3">
                                  <div className="rectangle-5" />

                                  <div className="rectangle-6" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="label">
                            <div className="equipment-ID">RADIO FRAME</div>

                            <div className="type">
                              NY_MINI NO2_002 ASSEMBIAGE
                            </div>

                            <div className="equipment-status-2">
                              <div className="text-wrapper-12">
                                Commissioning
                              </div>
                            </div>
                          </div>

                          <div className="general-small-DQI">
                            <div className="frame-20">
                              <div className="rectangle-3" />

                              <div className="rectangle-4" />
                            </div>

                            <div className="frame-17">
                              <div className="text-wrapper-9">80%</div>
                            </div>
                          </div>

                          <DotsVertical className="icon-instance-node-2" />
                        </div>

                        <div className="equipment">
                          <div className="indicator">
                            <Cdma className="icon-instance-node-3" />
                          </div>

                          <div className="label">
                            <div className="equipment-ID">CDMA 800 CELL</div>

                            <div className="type">
                              NY_MINI NO2_002 ASSEMBIAGE
                            </div>

                            <div className="equipment-status-3">
                              <div className="text-wrapper-13">Design</div>
                            </div>
                          </div>

                          <div className="general-small-DQI">
                            <div className="frame-20">
                              <div className="rectangle-3" />

                              <div className="rectangle-4" />
                            </div>

                            <div className="frame-17">
                              <div className="text-wrapper-9">80%</div>
                            </div>
                          </div>

                          <DotsVertical className="icon-instance-node-2" />
                        </div>

                        <div className="equipment">
                          <div className="indicator">
                            <InternetDevices className="icon-instance-node-3" />
                          </div>

                          <div className="label">
                            <div className="equipment-ID">ENODEB</div>

                            <div className="type">MINLNYACTA-P-AL-0002-01</div>

                            <div className="equipment-status-4">
                              <div className="text-wrapper-12">Growth</div>
                            </div>
                          </div>

                          <div className="general-small-DQI">
                            <div className="frame-20">
                              <div className="rectangle-3" />

                              <div className="rectangle-4" />
                            </div>

                            <div className="frame-17">
                              <div className="text-wrapper-9">80%</div>
                            </div>
                          </div>

                          <DotsVertical className="icon-instance-node-2" />
                        </div>

                        <div className="equipment">
                          <div className="indicator">
                            <Cdma className="icon-instance-node-3" />
                          </div>

                          <div className="label">
                            <div className="equipment-ID">CDMA 800 CELL</div>

                            <div className="type">
                              NY_MINI NO2_002 ASSEMBIAGE
                            </div>

                            <div className="equipment-status">
                              <div className="text-wrapper-11">Live</div>
                            </div>
                          </div>

                          <div className="general-small-DQI">
                            <div className="frame-20">
                              <div className="rectangle-3" />

                              <div className="rectangle-4" />
                            </div>

                            <div className="frame-17">
                              <div className="text-wrapper-9">80%</div>
                            </div>
                          </div>

                          <DotsVertical className="icon-instance-node-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="general-grabber-wrapper">
              <div className="general-grabber">
                <ChevronLeft className="chevron-left" />
              </div>
            </div>
          </div>

          <div className="frame-21">
            <div className="div-3">
              <div className="main-header">
                <div className="div-3">
                  <div className="main">
                    <div className="search-box" />

                    <div className="others">
                      <div className="dowpdown-and-layers">
                        <div className="frame-22">
                          <div className="mode-selector">
                            <div className="horizontal-tabs-item">
                              <div className="text">Discovery</div>
                            </div>

                            <div className="horizontal-tabs-item-2">
                              <div className="text-2">OSS</div>
                            </div>
                          </div>

                          <div className="div-4">
                            <Globe className="icon-instance-node" />
                            <div className="text-3">Network</div>

                            <ChevronDown1 className="icon-instance-node-2" />
                            <div className="dropdown-list" />
                          </div>

                          <div className="div-4">
                            <Map className="icon-instance-node-2" />
                            <div className="text-3">Markets</div>

                            <ChevronDown1 className="icon-instance-node-2" />
                            <div className="dropdown-list-2" />
                          </div>

                          <div className="div-4">
                            <Site className="icon-instance-node" />
                            <div className="text-3">Site Type</div>

                            <ChevronDown1 className="icon-instance-node-2" />
                            <div className="dropdown-list-3" />
                          </div>

                          <div className="div-4">
                            <Product className="icon-instance-node-2" />
                            <div className="text-3">Product</div>

                            <ChevronDown1 className="icon-instance-node-2" />
                            <div className="dropdown-list-4" />
                          </div>
                        </div>

                        <div className="frame-23">
                          <div className="frame-24">
                            <div className="frame-22">
                              <div className="main-docker">
                                <div className="overlap-group-4">
                                  <div className="main-docker-docker">
                                    <div className="text-wrapper-14">
                                      Clear All
                                    </div>
                                  </div>

                                  <div className="docked-sites">
                                    <div className="text-wrapper-15">6</div>
                                  </div>
                                </div>
                              </div>

                              <div className="main-layers">
                                <div className="group-4">
                                  <div className="layers-three-wrapper">
                                    <LayersThree className="layers-three" />
                                  </div>
                                </div>
                              </div>

                              <img
                                className="ellipse"
                                alt="Ellipse"
                                src={ellipse2}
                              />
                            </div>

                            <div className="frame-24">
                              <div className="summary">
                                <div className="frame-25">
                                  <div className="expand-wrapper">
                                    <Expand05 className="icon-instance-node-2" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="frame-26" />
                        </div>
                      </div>
                    </div>

                    <div className="main-hamburger-alt">
                      <div className="hamburger">
                        <Menu1 className="icon-instance-node" />
                      </div>
                    </div>
                  </div>

                  <div className="bottom-widgets">
                    <div className="map-control-and">
                      <div className="floatingicon-CDN-NTV">
                        <div className="logo">
                          <VerizonLogo100PercentWidth className="icon-instance-node-3" />
                          <div className="network-topology">CND NTV</div>
                        </div>
                      </div>

                      <div className="map-zoom-coordinates">
                        <div className="zoom">
                          <Minus className="icon-instance-node" />
                          <Plus className="icon-instance-node" />
                        </div>

                        <div className="longitude">
                          <div className="text-wrapper-16">Lv 12</div>
                        </div>

                        <div className="latitude">
                          <div className="text-wrapper-16">Latitude:</div>

                          <div className="text-wrapper-17">37.090240</div>
                        </div>

                        <div className="longitude-2">
                          <div className="text-wrapper-16">Longitude:</div>

                          <div className="text-wrapper-17">-95.712891</div>
                        </div>
                      </div>

                      <div className="widget-group">
                        <div className="small-widget-donut">
                          <div className="title-summary-2">
                            <div className="text-wrapper-7">
                              Data Quality Index
                            </div>

                            <div className="text-wrapper-8">Network</div>
                          </div>

                          <div className="general-DQI">
                            <div className="frame-16">
                              <div className="rectangle" />

                              <div className="rectangle-2" />
                            </div>

                            <div className="frame-17">
                              <div className="text-wrapper-9">80%</div>

                              <div className="text-wrapper-10">Good</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="legends-and-topology">
                      <div className="legend-default">
                        <div className="map-legend">
                          <div className="frame-27">
                            <div className="sites">
                              <div className="text-wrapper-18">SITE TYPES</div>

                              <div className="macro-2">
                                <div className="site-types-2">
                                  <div className="macro-3" />
                                </div>

                                <div className="text-wrapper-19">Macro</div>
                              </div>

                              <div className="macro-2">
                                <div className="site-types-2">
                                  <div className="small-cell" />
                                </div>

                                <div className="text-wrapper-19">
                                  Small Cell
                                </div>
                              </div>

                              <div className="macro-2">
                                <div className="site-types-2">
                                  <MedCell className="med-cell" />
                                </div>

                                <div className="text-wrapper-19">Med Cell</div>
                              </div>

                              <div className="macro-2">
                                <div className="site-types-2">
                                  <Union className="union-instance" />
                                </div>

                                <div className="text-wrapper-19">
                                  In Building
                                </div>
                              </div>

                              <div className="macro-4">
                                <div className="icon-instance-node-3">
                                  <div className="ellipse-2" />
                                </div>

                                <div className="text-wrapper-19">Hub</div>
                              </div>

                              <div className="macro-4">
                                <SiteTypes className="icon-instance-node-3" />
                                <div className="text-wrapper-19">CLLI</div>
                              </div>

                              <div className="macro-4">
                                <SiteTypes1 className="icon-instance-node-3" />
                                <div className="text-wrapper-19">Alternate</div>
                              </div>

                              <div className="macro-4">
                                <div className="icon-instance-node-3">
                                  <div className="rectangle-7" />
                                </div>

                                <div className="text-wrapper-19">
                                  Fiber Repeater
                                </div>
                              </div>

                              <div className="macro-4">
                                <SiteTypes2 className="icon-instance-node-3" />
                                <div className="text-wrapper-19">Others</div>
                              </div>
                            </div>

                            <div className="sites">
                              <div className="text-wrapper-18">DQI RATING</div>

                              <div className="macro-2">
                                <div className="wireless-sites">
                                  <div className="in-building" />
                                </div>

                                <p className="p">
                                  <span className="span">Best </span>

                                  <span className="text-wrapper-20">
                                    (91%-100%)
                                  </span>
                                </p>
                              </div>

                              <div className="macro-2">
                                <div className="wireless-sites">
                                  <div className="in-building-2" />
                                </div>

                                <p className="p">
                                  <span className="span">Good</span>

                                  <span className="text-wrapper-20">
                                    {" "}
                                    (75%-90%)
                                  </span>
                                </p>
                              </div>

                              <div className="macro-2">
                                <div className="wireless-sites">
                                  <div className="in-building-3" />
                                </div>

                                <p className="p">
                                  <span className="span">Fair</span>

                                  <span className="text-wrapper-20">
                                    {" "}
                                    (30%-74%){" "}
                                  </span>
                                </p>
                              </div>

                              <div className="macro-2">
                                <div className="wireless-sites">
                                  <div className="in-building-4" />
                                </div>

                                <p className="p">
                                  <span className="span">Poor </span>

                                  <span className="text-wrapper-20">
                                    (1%-29%)
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>

                          <InfoCircle className="icon-instance-node" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Vector770 className="vector" />
          <Vector769 className="vector-769" />
        </div>
      </div>
    </div>
  );
};
