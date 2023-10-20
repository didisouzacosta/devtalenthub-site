'use client'

import { Button, Checkbox, Form, Input, Select, Card } from 'antd';

export default function FormEditor({ onFinish, onValuesChange }) {
    const levels = ['Junior', 'Pleno', 'Senior', 'Specialist']
    const languages = ['Android', 'iOS', 'React Native', 'Flutter']

    return (
        <Card title="Job infos">
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onValuesChange={onValuesChange}
                autoComplete="off"
                initialValues={{
                    isRemote: true,
                }}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the title!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Company"
                    name="company"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the company name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Brand URL"
                    name="brand"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the brand url!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Apply URl"
                    name="apply_url"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the apply url!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Salary"
                    name="salary"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Level"
                    name="level"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a level!',
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a level"
                        options={levels.map((level) => ({ label: level, value: level }))}
                    />
                </Form.Item>

                <Form.Item
                    label="Languages"
                    name="languages"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a language!',
                        },
                    ]}
                >
                    <Select
                        mode="multiple"
                        placeholder="Select languages"
                        options={languages.map((language) => ({ label: language, value: language }))}
                    />
                </Form.Item>

                <Form.Item
                    name="isRemote"
                    valuePropName="checked"
                >
                    <Checkbox>Is Remote</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}