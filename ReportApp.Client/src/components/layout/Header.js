import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Header.css";
import Gs1Logo from "../../images/GS1_Canada.svg";
import { FormattedMessage } from "react-intl";
import {
  setEnglishLanguage,
  setFrenchLanguage
} from "../../actions/LanguageActions";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  onLanguageChange = () => {
    if (this.props.language.title === "English") {
      this.props.setEnglishLanguage();
    } else {
      this.props.setFrenchLanguage();
    }
  };

  render() {
    return (
      <div className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
          <img src={Gs1Logo} alt="" className="pull-left logo" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <h1>
                  <FormattedMessage
                    id="app.title"
                    defaultMessage="welcome"
                    description="Welcome header on app main page"
                  />
                </h1>
              </li>
            </ul>
          </div>
          <div
            className="login-menu hidden-xs"
            style={{ float: "right", marginTop: 5 }}
          >
            <div
              className="pull-right"
              style={{ paddingRight: 15, fontSize: 12 }}
            >
              <a href="javascript:void(0)" onClick={this.onLanguageChange}>
                {this.props.language.title}
              </a>
            </div>
            {/* <div style="float: right">
                    <button class="btn-primary btn-margin btn-lg" onclick="window.location.href='https://mygs1.gs1ca.org/app/home'">
                        <span style="float:left; font-size: 14px;">myGS1</span>
                    </button>
                </div>
                <div class="btn-group dropdown" dropdown="" data-placement="left" title="" uib-tooltip="Information" tooltip-placement="left" style="float: right; margin-top: 15px; margin-right: 15px; ">
                    <button type="button" class="btn-primary btn-margin btn-lg bg-blue dropdown-toggle form-control" data-toggle="dropdown" aria-expanded="false">
                        <span style="float:left; font-size: 14px;"><i class="fa fa-user"></i>&nbsp;&nbsp;</span>
                        <span style="float:right; font-size: 14px;"><i class="fa fa-chevron-down" style="color: #F26334;"></i></span>
                    </button>
                    <div class="dropdown-menu pull-right" role="menu" style="width:430px;" aria-labelledby="dropdownUserSettings">
                        <div class="row" style="padding: 20px;">
                            <div class="col-xs-5 col-sm-5 col-md-5">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>
                                            <span class="h5 ng-binding">Company:</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>
                                            <span class="h5 ng-binding">GLN:</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>
                                            <span class="h5 ng-binding">User ID:</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>
                                            <span class="h5 ng-binding">User Roles:</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-7 col-sm-7 col-md-7">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>
                                            <span class="h5 ng-binding" ng-bind="appCtrl.loggedUser.primary_company.company_name" style="font-weight:200;">GS1 Canada</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>
                                            <span class="h5 ng-binding" ng-bind="appCtrl.loggedUser.primary_company.gln" style="font-weight:200;">0068780850147</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>
                                            <span class="h5 ng-binding" ng-bind="appCtrl.loggedUser.user_name" style="font-weight:200;">user@gs1ca.org</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-6 col-md-6 pull-left">
                                        <p>
                                            <!-- ngRepeat: r in appCtrl.loggedUserRoles -->

                                            <!--<span class="h5" translate="{{ appCtrl.loggedUserRoles | translate }}" style="font-weight:200;"></span>-->
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-group dropdown" dropdown="" data-placement="left" title="" uib-tooltip="Information" tooltip-placement="left" style="float: right; margin-top: 15px; margin-right: 15px; ">
                    <button type="button" class="btn-primary btn-margin btn-lg bg-blue dropdown-toggle form-control" data-toggle="dropdown" aria-expanded="false">
                        <span style="float:left; font-size: 14px;"><i class="fa fa-info-circle"></i>&nbsp;&nbsp;</span>
                        <span style="float:right; font-size: 14px;"><i class="fa fa-chevron-down" style="color: #F26334;"></i></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-ex pull-right" style="width:220px;">
                        <li ng-click="appCtrl.onContactUs()"><a href="#" translate="Menu_ContactUs" class="ng-scope">Contact Us</a></li>
                        <li ng-click="appCtrl.onHelp()"><a href="#" translate="Menu_Help" class="ng-scope">Help</a></li>
                        <li ng-click="appCtrl.onPrivacyPolicy()"><a href="#" translate="Menu_PrivacyPolicy" class="ng-scope">Privacy Policy</a></li>
                        <li ng-click="appCtrl.onTermsConditions()"><a href="#" translate="Menu_TermsConditions" class="ng-scope">Terms and Conditions</a></li>
                    </ul>
                </div> */}
          </div>
        </nav>
        <div className="toolnavigation" />
      </div>
    );
  }
}

Header.propTypes = {
  language: PropTypes.object.isRequired,
  setEnglishLanguage: PropTypes.func.isRequired,
  setFrenchLanguage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.language
});

export default connect(
  mapStateToProps,
  {
    setEnglishLanguage,
    setFrenchLanguage
  }
)(Header);
