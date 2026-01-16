"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Search,
  Bell,
  Settings,
  Plus,
  Phone,
  Mail,
  Filter,
  Download,
  BarChart3,
  FileText,
  Target,
  Briefcase,
  MessageSquare,
  Database,
  Zap,
  Crown,
  LogOut,
  HelpCircle,
  ChevronRight,
} from "lucide-react"

export function CRMDashboard() {
  const [selectedContact, setSelectedContact] = useState(null)

  return (
    <div className="h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/fractal-20glass-20-204.jpeg')`,
        }}
      />
      <div className="bg-black/30 absolute inset-0" />

      <div className="relative z-10 p-6 grid grid-cols-12 gap-6 h-screen">
        {/* Left Sidebar Card */}
        <Card className="col-span-2 backdrop-blur-xl bg-sidebar/10 border border-sidebar-border rounded-3xl p-6 pb-6 h-fit flex flex-col">
          <div className="space-y-6">
            {/* Logo */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-sidebar-foreground">CRM Pro</h1>
              <p className="text-sidebar-foreground/60 text-sm">Customer Management</p>
            </div>

            {/* Main Navigation */}
            <div>
              <h4 className="text-sidebar-foreground/80 text-sm font-semibold uppercase tracking-wider mb-3">
                Main Menu
              </h4>
              <nav className="space-y-2">
                {[
                  { icon: Users, label: "Contacts", active: true },
                  { icon: TrendingUp, label: "Analytics" },
                  { icon: DollarSign, label: "Sales Pipeline" },
                  { icon: Calendar, label: "Calendar" },
                  { icon: Target, label: "Campaigns" },
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`w-full justify-start text-base text-sidebar-foreground/80 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground transition-all duration-700 ease-out hover:scale-[1.02] h-11 ${
                      item.active ? "bg-sidebar-accent/20 text-sidebar-foreground border border-sidebar-accent/30" : ""
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>

            {/* CRM Tools */}
            <div>
              <h4 className="text-sidebar-foreground/80 text-sm font-semibold uppercase tracking-wider mb-3">
                CRM Tools
              </h4>
              <nav className="space-y-2">
                {[
                  { icon: FileText, label: "Reports" },
                  { icon: Briefcase, label: "Deals" },
                  { icon: MessageSquare, label: "Messages" },
                  { icon: Database, label: "Data Import" },
                  { icon: BarChart3, label: "Forecasting" },
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-base text-sidebar-foreground/80 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground transition-all duration-700 ease-out hover:scale-[1.02] h-11"
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>

            {/* Administration */}
            <div>
              <h4 className="text-sidebar-foreground/80 text-sm font-semibold uppercase tracking-wider mb-3">
                Administration
              </h4>
              <nav className="space-y-2">
                {[
                  { icon: Settings, label: "Settings" },
                  { icon: Zap, label: "Automations" },
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-base text-sidebar-foreground/80 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground transition-all duration-700 ease-out hover:scale-[1.02] h-11"
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex-shrink-0 space-y-4 pt-4 border-t border-sidebar-border">
            <Card className="backdrop-blur-xl bg-gradient-to-br from-chart-1/20 to-chart-4/20 border border-chart-1/30 rounded-2xl p-4">
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <Crown className="h-8 w-8 text-chart-1" />
                </div>
                <div>
                  <h4 className="text-sidebar-foreground font-semibold text-lg">Go Premium</h4>
                  <p className="text-sidebar-foreground/70 text-sm">Unlock advanced features</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-chart-1 to-chart-4 hover:from-chart-1/80 hover:to-chart-4/80 text-sidebar-primary-foreground border-0 transition-all duration-700 ease-out hover:scale-[1.02] text-sm font-medium"
                >
                  Upgrade Now
                  <ChevronRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </Card>

            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-base text-sidebar-foreground/80 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground transition-all duration-700 ease-out hover:scale-[1.02] h-11"
              >
                <HelpCircle className="mr-3 h-5 w-5" />
                Contact Support
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-base text-sidebar-foreground/80 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground transition-all duration-700 ease-out hover:scale-[1.02] h-11"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Content Area */}
        <div className="col-span-8 space-y-6 h-screen overflow-y-auto">
          {/* Header Card */}
          <Card className="backdrop-blur-xl bg-card/10 border border-border rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Dashboard 📊</h2>
                <p className="text-foreground/60">Welcome back! Here's your CRM overview</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 h-4 w-4" />
                  <Input
                    placeholder="Search contacts..."
                    className="pl-10 bg-card/5 border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:border-border focus:bg-card/10"
                  />
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-foreground/80 hover:bg-card/10 hover:text-foreground"
                >
                  <Bell className="h-5 w-5" />
                </Button>
                <Button className="bg-card/10 hover:bg-card/20 border border-border hover:border-border text-foreground transition-all duration-700 ease-out hover:scale-[1.02]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Contact
                </Button>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { title: "Total Contacts", value: "2,847", change: "+12%", icon: Users, color: "text-chart-2" },
              { title: "Active Deals", value: "156", change: "+8%", icon: TrendingUp, color: "text-chart-3" },
              { title: "Revenue", value: "$89.2K", change: "+23%", icon: DollarSign, color: "text-chart-1" },
              { title: "Meetings", value: "24", change: "+5%", icon: Calendar, color: "text-chart-4" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-card/10 border border-border rounded-3xl p-6 transition-all duration-700 ease-out hover:scale-[1.02] hover:bg-card/15"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground/60 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </Card>
            ))}
          </div>

          {/* Contacts and Sales Target Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="backdrop-blur-xl bg-card/10 border border-border rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Recent Contacts 👥</h3>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost" className="text-foreground/80 hover:bg-card/10">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button size="sm" variant="ghost" className="text-foreground/80 hover:bg-card/10">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Sarah Johnson",
                    email: "sarah@company.com",
                    phone: "+1 (555) 123-4567",
                    company: "TechCorp Inc.",
                    status: "Active",
                    value: "$12.5K",
                    avatar: "SJ",
                  },
                  {
                    name: "Michael Chen",
                    email: "michael@startup.io",
                    phone: "+1 (555) 987-6543",
                    company: "StartupHub",
                    status: "Prospect",
                    value: "$8.2K",
                    avatar: "MC",
                  },
                  {
                    name: "Emily Rodriguez",
                    email: "emily@agency.com",
                    phone: "+1 (555) 456-7890",
                    company: "Creative Agency",
                    status: "Active",
                    value: "$15.7K",
                    avatar: "ER",
                  },
                  {
                    name: "David Kim",
                    email: "david@tech.com",
                    phone: "+1 (555) 321-0987",
                    company: "TechSolutions",
                    status: "Inactive",
                    value: "$3.1K",
                    avatar: "DK",
                  },
                  {
                    name: "Lisa Thompson",
                    email: "lisa@design.co",
                    phone: "+1 (555) 654-3210",
                    company: "Design Studio",
                    status: "Active",
                    value: "$9.8K",
                    avatar: "LT",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-card/5 rounded-xl border border-border/50 hover:bg-card/10 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-secondary/20 text-secondary-foreground text-sm font-medium">
                          {contact.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-foreground text-sm">{contact.name}</p>
                            <p className="text-xs text-foreground/60">
                              {contact.company} • {contact.phone}
                            </p>
                          </div>
                          <div className="text-right ml-4">
                            <p className="font-bold text-foreground text-sm">{contact.value}</p>
                            <Badge
                              variant={
                                contact.status === "Active"
                                  ? "default"
                                  : contact.status === "Prospect"
                                    ? "secondary"
                                    : "outline"
                              }
                              className={`text-xs ${
                                contact.status === "Active"
                                  ? "bg-chart-3/20 text-chart-3 border-chart-3/30"
                                  : contact.status === "Prospect"
                                    ? "bg-chart-2/20 text-chart-2 border-chart-2/30"
                                    : "bg-muted/20 text-muted-foreground border-muted/30"
                              }`}
                            >
                              {contact.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-card/10 border border-border rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Sales Target 🎯</h3>
                <Button size="sm" variant="ghost" className="text-foreground/80 hover:bg-card/10">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Monthly Target Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Monthly Target</span>
                    <span className="text-foreground font-semibold">$125K</span>
                  </div>
                  <div className="w-full bg-card/10 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-chart-3 to-chart-2 h-3 rounded-full"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-chart-3">$85K achieved</span>
                    <span className="text-foreground/60">68%</span>
                  </div>
                </div>

                {/* Quarterly Target Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-sm">Quarterly Target</span>
                    <span className="text-foreground font-semibold">$375K</span>
                  </div>
                  <div className="w-full bg-card/10 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-chart-1 to-chart-4 h-3 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-chart-1">$168K achieved</span>
                    <span className="text-foreground/60">45%</span>
                  </div>
                </div>

                {/* Team Performance */}
                <div className="space-y-3">
                  <h4 className="text-foreground font-medium">Team Performance</h4>
                  <div className="space-y-2">
                    {[
                      { name: "Sales Team A", progress: 78, color: "from-chart-2 to-chart-4" },
                      { name: "Sales Team B", progress: 62, color: "from-chart-3 to-chart-1" },
                      { name: "Sales Team C", progress: 54, color: "from-chart-1 to-chart-2" },
                    ].map((team, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground/80">{team.name}</span>
                          <span className="text-foreground">{team.progress}%</span>
                        </div>
                        <div className="w-full bg-card/10 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${team.color} h-2 rounded-full`}
                            style={{ width: `${team.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Days Remaining */}
                <div className="bg-card/5 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-foreground/60 text-sm">Days left in month</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Full-width Premium Upgrade Banner */}
          <Card className="backdrop-blur-xl bg-card/10 border border-border rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 border border-secondary/30 rounded-2xl">
                  <Crown className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Upgrade to CRM Pro Premium</h3>
                  <p className="text-foreground/80 text-lg mb-3">
                    Unlock advanced analytics, unlimited contacts, and premium integrations
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-foreground/70">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                      <span>Advanced Reports</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                      <span>Unlimited Storage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
                      <span>Priority Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
                      <span>API Access</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right space-y-4">
                <div className="bg-card/10 rounded-xl p-4 border border-border">
                  <p className="text-foreground/60 text-sm">Switch to Annual</p>
                  <p className="text-2xl font-bold text-foreground">$79/month → $63/month</p>
                  <p className="text-sm font-medium text-chart-1">Save 20%</p>
                </div>
                <Button
                  size="lg"
                  className="bg-secondary/20 hover:bg-secondary/30 border border-secondary/30 hover:border-secondary/40 text-secondary-foreground transition-all duration-700 ease-out hover:scale-[1.02] px-8 py-3 text-lg font-semibold"
                >
                  Upgrade Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Sidebar Card */}
        <Card className="col-span-2 backdrop-blur-xl bg-sidebar/10 border border-sidebar-border rounded-3xl p-6 pb-6 h-fit">
          <div className="space-y-6">
            {/* Quick Actions */}
            <div>
              <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Quick Actions ⚡</h3>
              <div className="space-y-2">
                {[
                  { icon: Phone, label: "Schedule Call" },
                  { icon: Mail, label: "Send Email" },
                  { icon: Calendar, label: "Book Meeting" },
                  { icon: Plus, label: "Add Note" },
                ].map((action, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground transition-all duration-700 ease-out hover:scale-[1.02]"
                  >
                    <action.icon className="mr-3 h-4 w-4" />
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* AI Xperia Card */}
            <Card className="backdrop-blur-xl bg-sidebar-accent/10 border border-sidebar-border rounded-2xl p-4">
              <div className="text-center space-y-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <h4 className="text-sidebar-foreground font-semibold">Talk to our new AI</h4>
                  <p className="text-sidebar-foreground/70 text-sm">Xperia</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-sidebar-accent/20 hover:bg-sidebar-accent/30 border border-sidebar-accent/30 hover:border-sidebar-accent/40 text-sidebar-accent-foreground transition-all duration-700 ease-out hover:scale-[1.02]"
                >
                  Start Chat
                </Button>
              </div>
            </Card>

            {/* Recent Activity */}
            <div>
              <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Recent Activity 📈</h3>
              <div className="space-y-3">
                {[
                  { action: "New contact added", time: "2 min ago", type: "success" },
                  { action: "Deal closed", time: "1 hour ago", type: "success" },
                  { action: "Meeting scheduled", time: "3 hours ago", type: "info" },
                  { action: "Email sent", time: "5 hours ago", type: "default" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-sidebar/5 rounded-xl">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "success"
                          ? "bg-chart-3"
                          : activity.type === "info"
                            ? "bg-chart-2"
                            : "bg-sidebar-foreground/60"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm text-sidebar-foreground">{activity.action}</p>
                      <p className="text-xs text-sidebar-foreground/60">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div>
              <h3 className="text-lg font-semibold text-sidebar-foreground mb-4">Top Performers 🏆</h3>
              <div className="space-y-3">
                {[
                  { name: "Alex Smith", deals: 12, avatar: "AS" },
                  { name: "Maria Garcia", deals: 9, avatar: "MG" },
                  { name: "John Doe", deals: 7, avatar: "JD" },
                ].map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-sidebar/5 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-sidebar-accent/20 text-sidebar-accent-foreground text-xs">
                          {performer.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-sidebar-foreground">{performer.name}</p>
                        <p className="text-xs text-sidebar-foreground/60">{performer.deals} deals</p>
                      </div>
                    </div>
                    <Badge className="bg-sidebar-accent/10 text-sidebar-accent-foreground border-sidebar-accent/20">
                      #{index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer Attribution */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="backdrop-blur-xl bg-card/10 border border-border rounded-full px-6 py-2">
          <p className="text-foreground/80 text-sm">
            Designed and Developed with ❤️ by{" "}
            <a
              href="https://www.youtube.com/@diecastbydollar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/60 transition-colors duration-300"
            >
              Dollar Gill
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
