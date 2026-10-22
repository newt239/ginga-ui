import type { ComponentType } from "react";
import type { Locale } from "#/i18n/locales";

import * as enAccordion from "./en/accordion";
import * as enAlert from "./en/alert";
import * as enAlertDialog from "./en/alert-dialog";
import * as enAnchor from "./en/anchor";
import * as enBadge from "./en/badge";
import * as enBox from "./en/box";
import * as enButton from "./en/button";
import * as enCard from "./en/card";
import * as enCheckbox from "./en/checkbox";
import * as enCodeBlock from "./en/code-block";
import * as enDialog from "./en/dialog";
import * as enDrawer from "./en/drawer";
import * as enFormControl from "./en/form-control";
import * as enHeading from "./en/heading";
import * as enImage from "./en/image";
import * as enInput from "./en/input";
import * as enList from "./en/list";
import * as enParagraph from "./en/paragraph";
import * as enPopover from "./en/popover";
import * as enQuestionnaire from "./en/questionnaire";
import * as enRadio from "./en/radio";
import * as enSegmentedControl from "./en/segmented-control";
import * as enSelect from "./en/select";
import * as enSlider from "./en/slider";
import * as enSwitch from "./en/switch";
import * as enTab from "./en/tab";
import * as enTable from "./en/table";
import * as enToast from "./en/toast";
import * as enTrace from "./en/trace";
import * as jaAccordion from "./ja/accordion";
import * as jaAlert from "./ja/alert";
import * as jaAlertDialog from "./ja/alert-dialog";
import * as jaAnchor from "./ja/anchor";
import * as jaBadge from "./ja/badge";
import * as jaBox from "./ja/box";
import * as jaButton from "./ja/button";
import * as jaCard from "./ja/card";
import * as jaCheckbox from "./ja/checkbox";
import * as jaCodeBlock from "./ja/code-block";
import * as jaDialog from "./ja/dialog";
import * as jaDrawer from "./ja/drawer";
import * as jaFormControl from "./ja/form-control";
import * as jaHeading from "./ja/heading";
import * as jaImage from "./ja/image";
import * as jaInput from "./ja/input";
import * as jaList from "./ja/list";
import * as jaParagraph from "./ja/paragraph";
import * as jaPopover from "./ja/popover";
import * as jaQuestionnaire from "./ja/questionnaire";
import * as jaRadio from "./ja/radio";
import * as jaSegmentedControl from "./ja/segmented-control";
import * as jaSelect from "./ja/select";
import * as jaSlider from "./ja/slider";
import * as jaSwitch from "./ja/switch";
import * as jaTab from "./ja/tab";
import * as jaTable from "./ja/table";
import * as jaToast from "./ja/toast";
import * as jaTrace from "./ja/trace";

type ExampleModule = Record<string, ComponentType>;

export const EXAMPLES: Record<Locale, Record<string, ExampleModule>> = {
  en: {
    accordion: enAccordion,
    alert: enAlert,
    "alert-dialog": enAlertDialog,
    anchor: enAnchor,
    badge: enBadge,
    box: enBox,
    button: enButton,
    card: enCard,
    checkbox: enCheckbox,
    "code-block": enCodeBlock,
    dialog: enDialog,
    drawer: enDrawer,
    "form-control": enFormControl,
    heading: enHeading,
    image: enImage,
    input: enInput,
    list: enList,
    paragraph: enParagraph,
    popover: enPopover,
    questionnaire: enQuestionnaire,
    radio: enRadio,
    "segmented-control": enSegmentedControl,
    select: enSelect,
    slider: enSlider,
    switch: enSwitch,
    tab: enTab,
    table: enTable,
    toast: enToast,
    trace: enTrace,
  },
  ja: {
    accordion: jaAccordion,
    alert: jaAlert,
    "alert-dialog": jaAlertDialog,
    anchor: jaAnchor,
    badge: jaBadge,
    box: jaBox,
    button: jaButton,
    card: jaCard,
    checkbox: jaCheckbox,
    "code-block": jaCodeBlock,
    dialog: jaDialog,
    drawer: jaDrawer,
    "form-control": jaFormControl,
    heading: jaHeading,
    image: jaImage,
    input: jaInput,
    list: jaList,
    paragraph: jaParagraph,
    popover: jaPopover,
    questionnaire: jaQuestionnaire,
    radio: jaRadio,
    "segmented-control": jaSegmentedControl,
    select: jaSelect,
    slider: jaSlider,
    switch: jaSwitch,
    tab: jaTab,
    table: jaTable,
    toast: jaToast,
    trace: jaTrace,
  },
};
