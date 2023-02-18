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
                    <a href="index.html" data-type="index-link">home-stock documentation</a>
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
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-6b1d9e08675f7f8c7b38cc6d7368f8bc54e2327eb63bf62460c0ef2d595d262649ddf7713ff3c985d58983f4899d84e650903845791aa3cd4af019b480a9e667"' : 'data-target="#xs-components-links-module-AdminModule-6b1d9e08675f7f8c7b38cc6d7368f8bc54e2327eb63bf62460c0ef2d595d262649ddf7713ff3c985d58983f4899d84e650903845791aa3cd4af019b480a9e667"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-6b1d9e08675f7f8c7b38cc6d7368f8bc54e2327eb63bf62460c0ef2d595d262649ddf7713ff3c985d58983f4899d84e650903845791aa3cd4af019b480a9e667"' :
                                            'id="xs-components-links-module-AdminModule-6b1d9e08675f7f8c7b38cc6d7368f8bc54e2327eb63bf62460c0ef2d595d262649ddf7713ff3c985d58983f4899d84e650903845791aa3cd4af019b480a9e667"' }>
                                            <li class="link">
                                                <a href="components/AdminNavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminNavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fa3c6117f7e2efec63ef67030e6e219dc68ac5c532668667b6e4c757741a2501b318d4ca1231cdcc479c4105e585f85429c2ef1832b98090e2f33b1692340f2e"' : 'data-target="#xs-components-links-module-AppModule-fa3c6117f7e2efec63ef67030e6e219dc68ac5c532668667b6e4c757741a2501b318d4ca1231cdcc479c4105e585f85429c2ef1832b98090e2f33b1692340f2e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fa3c6117f7e2efec63ef67030e6e219dc68ac5c532668667b6e4c757741a2501b318d4ca1231cdcc479c4105e585f85429c2ef1832b98090e2f33b1692340f2e"' :
                                            'id="xs-components-links-module-AppModule-fa3c6117f7e2efec63ef67030e6e219dc68ac5c532668667b6e4c757741a2501b318d4ca1231cdcc479c4105e585f85429c2ef1832b98090e2f33b1692340f2e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-895da1bae7d4e104d8ba1655da0472d195a80f237791d619102c5f6f2b8c36adf0f6b3c2dac0cd71b338d94e2f653bd311afc487abe246e3701d5ef52709ce3b"' : 'data-target="#xs-components-links-module-AuthModule-895da1bae7d4e104d8ba1655da0472d195a80f237791d619102c5f6f2b8c36adf0f6b3c2dac0cd71b338d94e2f653bd311afc487abe246e3701d5ef52709ce3b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-895da1bae7d4e104d8ba1655da0472d195a80f237791d619102c5f6f2b8c36adf0f6b3c2dac0cd71b338d94e2f653bd311afc487abe246e3701d5ef52709ce3b"' :
                                            'id="xs-components-links-module-AuthModule-895da1bae7d4e104d8ba1655da0472d195a80f237791d619102c5f6f2b8c36adf0f6b3c2dac0cd71b338d94e2f653bd311afc487abe246e3701d5ef52709ce3b"' }>
                                            <li class="link">
                                                <a href="components/LoginFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CartModule-8042485e49ce895917c578999d80adaccff7fa4cd569b87c80f9e3d0b2e6dc5ccd680970237abbab785dc3a8456f8bfb59b12c4354d92e66f562c7ab6afab164"' : 'data-target="#xs-components-links-module-CartModule-8042485e49ce895917c578999d80adaccff7fa4cd569b87c80f9e3d0b2e6dc5ccd680970237abbab785dc3a8456f8bfb59b12c4354d92e66f562c7ab6afab164"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-8042485e49ce895917c578999d80adaccff7fa4cd569b87c80f9e3d0b2e6dc5ccd680970237abbab785dc3a8456f8bfb59b12c4354d92e66f562c7ab6afab164"' :
                                            'id="xs-components-links-module-CartModule-8042485e49ce895917c578999d80adaccff7fa4cd569b87c80f9e3d0b2e6dc5ccd680970237abbab785dc3a8456f8bfb59b12c4354d92e66f562c7ab6afab164"' }>
                                            <li class="link">
                                                <a href="components/CartListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomMaterialModule.html" data-type="entity-link" >CustomMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsModule-7cc44ccd1c6af2839de39679fed433ec761cb025bccd77f8abf3ea97d03582c798cc41b05d9ae75a9bcf34372722b58a65eccc8df0a664ed06a20d33cbfc5ebb"' : 'data-target="#xs-components-links-module-ProductsModule-7cc44ccd1c6af2839de39679fed433ec761cb025bccd77f8abf3ea97d03582c798cc41b05d9ae75a9bcf34372722b58a65eccc8df0a664ed06a20d33cbfc5ebb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-7cc44ccd1c6af2839de39679fed433ec761cb025bccd77f8abf3ea97d03582c798cc41b05d9ae75a9bcf34372722b58a65eccc8df0a664ed06a20d33cbfc5ebb"' :
                                            'id="xs-components-links-module-ProductsModule-7cc44ccd1c6af2839de39679fed433ec761cb025bccd77f8abf3ea97d03582c798cc41b05d9ae75a9bcf34372722b58a65eccc8df0a664ed06a20d33cbfc5ebb"' }>
                                            <li class="link">
                                                <a href="components/CreateProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsRoutingModule.html" data-type="entity-link" >ProductsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RolesPermissionsModule.html" data-type="entity-link" >RolesPermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesPermissionsModule-8a8f908f87dfa7e24fa9c7ba9f2a92b873877b8ed2a08d3c6adc7d0f9dc8274e4ce5a342e001b092412bd41094329e156cb7cb9f7b0430eb38076735aeb9ba79"' : 'data-target="#xs-components-links-module-RolesPermissionsModule-8a8f908f87dfa7e24fa9c7ba9f2a92b873877b8ed2a08d3c6adc7d0f9dc8274e4ce5a342e001b092412bd41094329e156cb7cb9f7b0430eb38076735aeb9ba79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesPermissionsModule-8a8f908f87dfa7e24fa9c7ba9f2a92b873877b8ed2a08d3c6adc7d0f9dc8274e4ce5a342e001b092412bd41094329e156cb7cb9f7b0430eb38076735aeb9ba79"' :
                                            'id="xs-components-links-module-RolesPermissionsModule-8a8f908f87dfa7e24fa9c7ba9f2a92b873877b8ed2a08d3c6adc7d0f9dc8274e4ce5a342e001b092412bd41094329e156cb7cb9f7b0430eb38076735aeb9ba79"' }>
                                            <li class="link">
                                                <a href="components/RolePermissionsAssignmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolePermissionsAssignmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesPermissionsRoutingModule.html" data-type="entity-link" >RolesPermissionsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-249151b86d86d0d7b041bb3708cbc3d4b505289d3307151131e0c555fda0b40b21d949138d460da3595644322ef291b27e29437723c1afac13687784c4e2a441"' : 'data-target="#xs-components-links-module-SharedModule-249151b86d86d0d7b041bb3708cbc3d4b505289d3307151131e0c555fda0b40b21d949138d460da3595644322ef291b27e29437723c1afac13687784c4e2a441"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-249151b86d86d0d7b041bb3708cbc3d4b505289d3307151131e0c555fda0b40b21d949138d460da3595644322ef291b27e29437723c1afac13687784c4e2a441"' :
                                            'id="xs-components-links-module-SharedModule-249151b86d86d0d7b041bb3708cbc3d4b505289d3307151131e0c555fda0b40b21d949138d460da3595644322ef291b27e29437723c1afac13687784c4e2a441"' }>
                                            <li class="link">
                                                <a href="components/AddInCartModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddInCartModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FileUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploadComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingListsModule.html" data-type="entity-link" >ShoppingListsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShoppingListsModule-dd61a3a77bd9e237c0ba3e7f7c97bf97f3114e4e832abaf16f316ff6a91dd88ab51b182b036aeb7816fbdc598bb1dd99048af42a2ecc2cf40f08669143b78779"' : 'data-target="#xs-components-links-module-ShoppingListsModule-dd61a3a77bd9e237c0ba3e7f7c97bf97f3114e4e832abaf16f316ff6a91dd88ab51b182b036aeb7816fbdc598bb1dd99048af42a2ecc2cf40f08669143b78779"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShoppingListsModule-dd61a3a77bd9e237c0ba3e7f7c97bf97f3114e4e832abaf16f316ff6a91dd88ab51b182b036aeb7816fbdc598bb1dd99048af42a2ecc2cf40f08669143b78779"' :
                                            'id="xs-components-links-module-ShoppingListsModule-dd61a3a77bd9e237c0ba3e7f7c97bf97f3114e4e832abaf16f316ff6a91dd88ab51b182b036aeb7816fbdc598bb1dd99048af42a2ecc2cf40f08669143b78779"' }>
                                            <li class="link">
                                                <a href="components/ListDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingListsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingListsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingListsRoutingModule.html" data-type="entity-link" >ShoppingListsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StockModule.html" data-type="entity-link" >StockModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StockModule-3f47090a198cb089b3868beb85b379859bb0d3350f109b528b41869f7c41e309bc90c812fd38c01108769e497f6f081e5c4a1d63e6d6186c15fbe6552d7cb594"' : 'data-target="#xs-components-links-module-StockModule-3f47090a198cb089b3868beb85b379859bb0d3350f109b528b41869f7c41e309bc90c812fd38c01108769e497f6f081e5c4a1d63e6d6186c15fbe6552d7cb594"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StockModule-3f47090a198cb089b3868beb85b379859bb0d3350f109b528b41869f7c41e309bc90c812fd38c01108769e497f6f081e5c4a1d63e6d6186c15fbe6552d7cb594"' :
                                            'id="xs-components-links-module-StockModule-3f47090a198cb089b3868beb85b379859bb0d3350f109b528b41869f7c41e309bc90c812fd38c01108769e497f6f081e5c4a1d63e6d6186c15fbe6552d7cb594"' }>
                                            <li class="link">
                                                <a href="components/StockListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StockListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StockRoutingModule.html" data-type="entity-link" >StockRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-85588da8d4d8a6b2cc6b2e4d22b09e3a8136a813c57d646bf6333f0e231241a2cad87e1b5068bdee298f89ad51402e5778f7c2c949c06d3dcc6921fb86617d64"' : 'data-target="#xs-components-links-module-UsersModule-85588da8d4d8a6b2cc6b2e4d22b09e3a8136a813c57d646bf6333f0e231241a2cad87e1b5068bdee298f89ad51402e5778f7c2c949c06d3dcc6921fb86617d64"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-85588da8d4d8a6b2cc6b2e4d22b09e3a8136a813c57d646bf6333f0e231241a2cad87e1b5068bdee298f89ad51402e5778f7c2c949c06d3dcc6921fb86617d64"' :
                                            'id="xs-components-links-module-UsersModule-85588da8d4d8a6b2cc6b2e4d22b09e3a8136a813c57d646bf6333f0e231241a2cad87e1b5068bdee298f89ad51402e5778f7c2c949c06d3dcc6921fb86617d64"' }>
                                            <li class="link">
                                                <a href="components/UserDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersRoutingModule-3b0395a26df2966fb7f43dca53f0b8ed1c21c7a0ea28528f1c9ec8c7763b4b739e71ec8dd71f17123da33586c35c75932490cae620dc6fa1f88318f4ad2c5485"' : 'data-target="#xs-injectables-links-module-UsersRoutingModule-3b0395a26df2966fb7f43dca53f0b8ed1c21c7a0ea28528f1c9ec8c7763b4b739e71ec8dd71f17123da33586c35c75932490cae620dc6fa1f88318f4ad2c5485"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersRoutingModule-3b0395a26df2966fb7f43dca53f0b8ed1c21c7a0ea28528f1c9ec8c7763b4b739e71ec8dd71f17123da33586c35c75932490cae620dc6fa1f88318f4ad2c5485"' :
                                        'id="xs-injectables-links-module-UsersRoutingModule-3b0395a26df2966fb7f43dca53f0b8ed1c21c7a0ea28528f1c9ec8c7763b4b739e71ec8dd71f17123da33586c35c75932490cae620dc6fa1f88318f4ad2c5485"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ButtonComponent.html" data-type="entity-link" >ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageComponent.html" data-type="entity-link" >PageComponent</a>
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
                                <a href="classes/MismatchValidator.html" data-type="entity-link" >MismatchValidator</a>
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
                                    <a href="injectables/AuthEffects.html" data-type="entity-link" >AuthEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileUploadService.html" data-type="entity-link" >FileUploadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabelsEffects.html" data-type="entity-link" >LabelsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabelsService.html" data-type="entity-link" >LabelsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyErrorHandler.html" data-type="entity-link" >MyErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsEffects.html" data-type="entity-link" >PermissionsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductEffects.html" data-type="entity-link" >ProductEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesEffects.html" data-type="entity-link" >RolesEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShoppingListEffects.html" data-type="entity-link" >ShoppingListEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShoppingListsEffects.html" data-type="entity-link" >ShoppingListsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShoppingListsService.html" data-type="entity-link" >ShoppingListsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StockService.html" data-type="entity-link" >StockService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnitsEffects.html" data-type="entity-link" >UnitsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnitsService.html" data-type="entity-link" >UnitsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEffects.html" data-type="entity-link" >UserEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/SecurityInterceptor.html" data-type="entity-link" >SecurityInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LabelResolver.html" data-type="entity-link" >LabelResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/PermissionResolver.html" data-type="entity-link" >PermissionResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/PermissionsResolver.html" data-type="entity-link" >PermissionsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProductResolver.html" data-type="entity-link" >ProductResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleResolver.html" data-type="entity-link" >RoleResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesResolver.html" data-type="entity-link" >RolesResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/ShoppingListsResolver.html" data-type="entity-link" >ShoppingListsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UnitResolver.html" data-type="entity-link" >UnitResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserResolver.html" data-type="entity-link" >UserResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UsersResolver.html" data-type="entity-link" >UsersResolver</a>
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
                                <a href="interfaces/AbstractModel.html" data-type="entity-link" >AbstractModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppFile.html" data-type="entity-link" >AppFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppState-1.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthState.html" data-type="entity-link" >AuthState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeatureState.html" data-type="entity-link" >FeatureState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeatureState-1.html" data-type="entity-link" >FeatureState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Icc.html" data-type="entity-link" >Icc</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Label.html" data-type="entity-link" >Label</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Metadata.html" data-type="entity-link" >Metadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductInList.html" data-type="entity-link" >ProductInList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShoppingList.html" data-type="entity-link" >ShoppingList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShoppingListsState.html" data-type="entity-link" >ShoppingListsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-1.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-2.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-3.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-4.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-5.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-6.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Unit.html" data-type="entity-link" >Unit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
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