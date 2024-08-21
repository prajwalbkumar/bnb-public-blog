import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      LinkedIn: "https://linkedin.com/in/prajwalbkumar",
      "GitHub": "https://github.com/prajwalbkumar",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.RecentNotes({ title: "🌿 Latest Branches" })),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "🌿 Latest Branches",
        limit: 3,
        filter: (f) =>
          f.slug!.startsWith("Essays/") && f.slug! !== "Essays/index" && !f.frontmatter?.noindex,
        linkToMore: "Essays/" as SimpleSlug,
      }),
    ),
    // Component.DesktopOnly(Component.Explorer({ title: "🐾 Trails", folderDefaultState: "collapsed", })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
