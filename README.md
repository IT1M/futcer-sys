<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ملف Markdown - نظام إدارة الموارد البشرية المتكامل</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Tajawal', sans-serif;
            background-color: #f8f9fa;
            color: #2c3e50;
            overflow: hidden;
        }
        .slide {
            width: 1280px;
            min-height: 720px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        .header {
            background: linear-gradient(135deg, #4338ca 0%, #8b5cf6 100%);
            color: white;
            padding: 30px 70px;
            border-bottom: 4px solid #6366f1;
        }
        .title {
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 22px;
            font-weight: 500;
            opacity: 0.9;
        }
        .content {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 40px 70px;
        }
        .markdown-container {
            background-color: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .markdown-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            gap: 15px;
        }
        .markdown-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
        }
        .markdown-icon i {
            font-size: 36px;
            color: #4338ca;
        }
        .markdown-title {
            font-size: 28px;
            font-weight: 700;
            color: #4338ca;
        }
        .code-block {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            font-family: 'Courier New', monospace;
            font-size: 18px;
            line-height: 1.6;
            color: #334155;
            border-right: 4px solid #6366f1;
            overflow: auto;
            flex-grow: 1;
        }
        .markdown-comment {
            color: #64748b;
        }
        .markdown-heading {
            color: #4338ca;
            font-weight: 700;
        }
        .markdown-text {
            color: #334155;
        }
        .markdown-list {
            color: #334155;
            margin-right: 20px;
        }
        .markdown-list-item {
            margin-bottom: 8px;
        }
        .markdown-bold {
            font-weight: 700;
            color: #4338ca;
        }
        .markdown-italic {
            font-style: italic;
            color: #64748b;
        }
        .markdown-link {
            color: #6366f1;
            text-decoration: none;
        }
        .markdown-code {
            background-color: #e0e7ff;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 16px;
            color: #4338ca;
        }
        .markdown-quote {
            border-right: 4px solid #6366f1;
            padding-right: 16px;
            margin: 16px 0;
            color: #64748b;
            font-style: italic;
        }
        .markdown-image {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 16px 0;
            color: #64748b;
        }
        .markdown-image i {
            color: #6366f1;
        }
        .markdown-table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
        }
        .markdown-table th, .markdown-table td {
            border: 1px solid #e2e8f0;
            padding: 8px 12px;
            text-align: right;
        }
        .markdown-table th {
            background-color: #f1f5f9;
            color: #4338ca;
            font-weight: 700;
        }
        .features {
            display: flex;
            justify-content: space-around;
            margin-top: 30px;
        }
        .feature {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 180px;
        }
        .feature-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
        }
        .feature-icon i {
            font-size: 28px;
            color: #4338ca;
        }
        .feature-text {
            font-size: 16px;
            color: #475569;
            font-weight: 500;
        }
        .footer {
            background-color: #f1f5f9;
            padding: 15px 70px;
            text-align: center;
            font-size: 16px;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
        }
    </style>
</head>
<body>
    <div class="slide">
        <div class="header">
            <h1 class="title">تحويل العرض التقديمي إلى ملفات Markdown</h1>
            <p class="subtitle">إنشاء محتوى Markdown لشريحة العنوان</p>
        </div>
        
        <div class="content">
            <div class="markdown-container">
                <div class="markdown-header">
                    <div class="markdown-icon">
                        <i class="material-icons">description</i>
                    </div>
                    <h2 class="markdown-title">ملف Markdown لشريحة العنوان</h2>
                </div>
                
                <div class="code-block">
<span class="markdown-comment"># نظام إدارة الموارد البشرية المتكامل</span>

<span class="markdown-comment">## مقدمة لنظام إدارة الموارد البشرية المتكامل المطور للبيئة السعودية والعربية</span>

---

<span class="markdown-comment">### نظرة عامة</span>

<span class="markdown-text">نظام متكامل مصمم خصيصاً للبيئة السعودية والعربية لإدارة الموارد البشرية بكفاءة وفعالية.</span>

<span class="markdown-comment">### المميزات الرئيسية</span>

<span class="markdown-list">
- <span class="markdown-list-item"><span class="markdown-bold">لوحة تحكم متكاملة</span> - إدارة جميع جوانب الموارد البشرية من واجهة واحدة</span>
- <span class="markdown-list-item"><span class="markdown-bold">إدارة الموظفين</span> - قاعدة بيانات شاملة للموظفين</span>
- <span class="markdown-list-item"><span class="markdown-bold">نظام الإجازات</span> - إدارة أنواع الإجازات المختلفة</span>
- <span class="markdown-list-item"><span class="markdown-bold">التعلم والتطوير</span> - متابعة الدورات التدريبية والشهادات</span>
</span>

<span class="markdown-comment">### التقنيات المستخدمة</span>

<span class="markdown-text">تم تطوير النظام باستخدام أحدث التقنيات:</span>

<span class="markdown-list">
- <span class="markdown-list-item"><span class="markdown-code">Next.js 14</span> مع App Router</span>
- <span class="markdown-list-item"><span class="markdown-code">TypeScript</span> لضمان جودة الكود</span>
- <span class="markdown-list-item"><span class="markdown-code">Tailwind CSS</span> للتصميم السريع</span>
- <span class="markdown-list-item"><span class="markdown-code">shadcn/ui</span> للمكونات الجاهزة</span>
</span>

<span class="markdown-quote">
نظام متطور مصمم خصيصاً للبيئة السعودية والعربية لتلبية جميع احتياجات إدارة الموارد البشرية
</span>
                </div>
                
                <div class="features">
                    <div class="feature">
                        <div class="feature-icon">
                            <i class="material-icons">dashboard</i>
                        </div>
                        <div class="feature-text">لوحة تحكم متكاملة</div>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">
                            <i class="material-icons">people</i>
                        </div>
                        <div class="feature-text">إدارة الموظفين</div>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">
                            <i class="material-icons">event_available</i>
                        </div>
                        <div class="feature-text">نظام الإجازات</div>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">
                            <i class="material-icons">school</i>
                        </div>
                        <div class="feature-text">التعلم والتطوير</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            محتوى Markdown لشريحة العنوان - نظام إدارة الموارد البشرية المتكامل
        </div>
    </div>
</body>
</html>