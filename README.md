# shamgar-audit-trail

This README outlines the details of using this Ember addon. shamgar-audit-trail is meant to display audit information for a shamgar framework's auditing.

## Installation

* `ember install shamgar-audit-trail`


## Usage

### {{audit-trail}}

```handlebars

{{audit-trail 
  resource=objectBeingAudited
  sections-to-show=sections
  fields=fields
}}
```

### Properties

<table width="100%">
  <tr>
  	<th valign="top" width="120px" align="left">Property</th>
  	<th valign="top" align="left">Description</th>
  </tr>
  <tr>
    <td valign="top"><code>resource</code></td>
    <td valign="top">Any ember object which contains the audit trail information</td>
  </tr>
  <tr>
    <td valign="top"><code>sections</code></td>
    <td valign="top">An array of sections to display</td>
  </tr>
  <tr>
    <td valign="top"><code>fields</code></td>
    <td valign="top">(Optional) The defaults are <code>at</code> and <code>by</code>.</td>
  </tr> 
</table>

<hr>

### {{audit-trail-link}}
```handlebars

{{audit-trail-link
  link-text="Open Audit Trail"
  resource=objectBeingAudited
  sections-to-show=sections
  fields=fields
}}
```

### Properties

<table width="100%">
  <tr>
  	<th valign="top" width="120px" align="left">Property</th>
  	<th valign="top" align="left">Description</th>
  </tr>
   <tr>
    <td valign="top"><code>resource</code></td>
    <td valign="top">(Optional) The text that shows on the link. The default is <code>View Audit Trail</code>.</td>
  </tr>
  <tr>
    <td valign="top"><code>resource</code></td>
    <td valign="top">Any ember object which contains the audit trail information</td>
  </tr>
  <tr>
    <td valign="top"><code>sections</code></td>
    <td valign="top">An array of sections to display</td>
  </tr>
  <tr>
    <td valign="top"><code>fields</code></td>
    <td valign="top">(Optional) The defaults are <code>at</code> and <code>by</code>.</td>
  </tr> 
</table>
