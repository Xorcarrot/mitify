'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mitify documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b9e9961e58ed06891957fadfebc73fef6b76cde310e73627ac1798858a438bfc75a5cef453b30354349f7426579ea7b9f5bda0a2935b84dcf83d0ba15629f584"' : 'data-target="#xs-components-links-module-AppModule-b9e9961e58ed06891957fadfebc73fef6b76cde310e73627ac1798858a438bfc75a5cef453b30354349f7426579ea7b9f5bda0a2935b84dcf83d0ba15629f584"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b9e9961e58ed06891957fadfebc73fef6b76cde310e73627ac1798858a438bfc75a5cef453b30354349f7426579ea7b9f5bda0a2935b84dcf83d0ba15629f584"' :
                                            'id="xs-components-links-module-AppModule-b9e9961e58ed06891957fadfebc73fef6b76cde310e73627ac1798858a438bfc75a5cef453b30354349f7426579ea7b9f5bda0a2935b84dcf83d0ba15629f584"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaceholderNoUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceholderNoUserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ManagerModule.html" data-type="entity-link" >ManagerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ManagerModule-e5c24106ac4537986b334d0705aa7f89855a96196bf75e15cc564e725b42cb14d7cb6846fbd29541203de152aed325319efaf8ccc640dd69edbb3dd373135666"' : 'data-target="#xs-components-links-module-ManagerModule-e5c24106ac4537986b334d0705aa7f89855a96196bf75e15cc564e725b42cb14d7cb6846fbd29541203de152aed325319efaf8ccc640dd69edbb3dd373135666"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManagerModule-e5c24106ac4537986b334d0705aa7f89855a96196bf75e15cc564e725b42cb14d7cb6846fbd29541203de152aed325319efaf8ccc640dd69edbb3dd373135666"' :
                                            'id="xs-components-links-module-ManagerModule-e5c24106ac4537986b334d0705aa7f89855a96196bf75e15cc564e725b42cb14d7cb6846fbd29541203de152aed325319efaf8ccc640dd69edbb3dd373135666"' }>
                                            <li class="link">
                                                <a href="components/ManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModuleManagerContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModuleManagerContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModuleManagerTableClosedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModuleManagerTableClosedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModuleManagerTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModuleManagerTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkriptDetailManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkriptDetailManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoDetailManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoDetailManagerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManagerRoutingModule.html" data-type="entity-link" >ManagerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StudentModule.html" data-type="entity-link" >StudentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentModule-dc2a68ecd2394291f9e32e38730ecea3ff50d1e96a982a58239dab96d3356ad543dcabb71b07ca1be05fe8a955db9e04c6c5fc29f3cef940c8d81ddbbf28793d"' : 'data-target="#xs-components-links-module-StudentModule-dc2a68ecd2394291f9e32e38730ecea3ff50d1e96a982a58239dab96d3356ad543dcabb71b07ca1be05fe8a955db9e04c6c5fc29f3cef940c8d81ddbbf28793d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentModule-dc2a68ecd2394291f9e32e38730ecea3ff50d1e96a982a58239dab96d3356ad543dcabb71b07ca1be05fe8a955db9e04c6c5fc29f3cef940c8d81ddbbf28793d"' :
                                            'id="xs-components-links-module-StudentModule-dc2a68ecd2394291f9e32e38730ecea3ff50d1e96a982a58239dab96d3356ad543dcabb71b07ca1be05fe8a955db9e04c6c5fc29f3cef940c8d81ddbbf28793d"' }>
                                            <li class="link">
                                                <a href="components/SkriptDetailStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkriptDetailStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentTableClosedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentTableClosedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestComComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestComComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoDetailStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoDetailStudentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentRoutingModule.html" data-type="entity-link" >StudentRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/MitifyUser.html" data-type="entity-link" >MitifyUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/Modul.html" data-type="entity-link" >Modul</a>
                            </li>
                            <li class="link">
                                <a href="classes/Report.html" data-type="entity-link" >Report</a>
                            </li>
                            <li class="link">
                                <a href="classes/REPORTS.html" data-type="entity-link" >REPORTS</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReportSkript.html" data-type="entity-link" >ReportSkript</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReportVideo.html" data-type="entity-link" >ReportVideo</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkriptContainer.html" data-type="entity-link" >SkriptContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkriptPost.html" data-type="entity-link" >SkriptPost</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoContainer.html" data-type="entity-link" >VideoContainer</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoPost.html" data-type="entity-link" >VideoPost</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DatasourceService.html" data-type="entity-link" >DatasourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportService.html" data-type="entity-link" >ReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportServiceService.html" data-type="entity-link" >ReportServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestUserService.html" data-type="entity-link" >TestUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserDataService.html" data-type="entity-link" >UserDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserManagementService.html" data-type="entity-link" >UserManagementService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ReportResponse.html" data-type="entity-link" >ReportResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SkirptPriority.html" data-type="entity-link" >SkirptPriority</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SkirptStatus.html" data-type="entity-link" >SkirptStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserResponse.html" data-type="entity-link" >UserResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VideoPriority.html" data-type="entity-link" >VideoPriority</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VideoStatus.html" data-type="entity-link" >VideoStatus</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});