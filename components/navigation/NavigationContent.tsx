import React, { Key } from 'react';
import { useRouter } from 'next/router';
import {
  SideNavGroup,
  SideNavItem,
} from '@leafygreen-ui/side-nav';
import Icon from '@leafygreen-ui/icon';
import MobileNavigationGroup from './MobileNavigationGroup';
import MobileNavigationItem from './MobileNavigationItem';
import { useAppContext } from 'contexts/AppContext';
import { Entry } from 'contentful';
import { ComponentFields, ContentPageFields } from 'utils/types';
import groupBy from 'utils/groupBy';

const foundations: Array<String> = [
  'accessibility',
  'forms',
  'grid',
  'icon-creation',
  'refresh-guide',
];

function NavigationContent({ isTouchDevice = false }: { isTouchDevice?: boolean }) {
  const router = useRouter();
  const activePage = router.asPath.split('/')[2];
  const { components, contentPageSections } = useAppContext();

  const renderGroup = () => {
    if (isTouchDevice) {
      return (
        <>
          <MobileNavigationGroup header="Foundations">
            {foundations.map((componentKebabCaseName: string) => (
              <MobileNavigationItem
                key={componentKebabCaseName as Key}
                onClick={() => router.push(`/foundation/${componentKebabCaseName}`)}
                active={componentKebabCaseName === activePage}
              >
                {componentKebabCaseName.split('-').join(' ')}
              </MobileNavigationItem>
            ))}
          </MobileNavigationGroup>
          <MobileNavigationGroup
            header="Components"
            initialCollapsed={false} // Always false until we add more sections to navigation
          >
            {components.map((component: Entry<ComponentFields>) => {
              const componentKebabCaseName = component.fields.kebabCaseName;
              const componentName = component.fields.name;
              return (
                <MobileNavigationItem
                  key={componentKebabCaseName}
                  onClick={() => router.push(`/component/${componentKebabCaseName}/example`)}
                  active={componentKebabCaseName === activePage}
                >
                  {componentName}
                </MobileNavigationItem>
              );
            })}
          </MobileNavigationGroup>
        </>
      );
    }

    return (
      <>
        {contentPageSections.map(contentPageSection => (
          <SideNavGroup header={contentPageSection.fields.title} glyph={<Icon glyph={contentPageSection.fields.iconName} />}>
            {contentPageSection.fields.contentPages.map(contentPage => (
              <SideNavItem
                key={contentPage.fields.title}
                onClick={() => router.push(`/${contentPageSection.fields.title.toLowerCase()}/${contentPage.fields.title.toLowerCase()}`)}
                active={contentPage.fields.title === activePage}
              >
                {contentPage.fields.title}
              </SideNavItem>
            ))}
          </SideNavGroup>
        ))}
        <SideNavGroup header="Components" glyph={<Icon glyph="Apps" />}>
          {components.map((component: Entry<ComponentFields>) => {
            const componentKebabCaseName = component.fields.kebabCaseName;
            const componentName = component.fields.name;
            return (
              <SideNavItem
                key={componentKebabCaseName}
                onClick={() => router.push(`/component/${componentKebabCaseName}/example`)}
                active={componentKebabCaseName === activePage}
              >
                {componentName}
              </SideNavItem>
            );
          })}
        </SideNavGroup>
      </>
    );
  };

  return renderGroup();
}

NavigationContent.displayName = 'NavigationContent';

export default NavigationContent;